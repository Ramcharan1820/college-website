const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

/* =====================================================
   MIDDLEWARE
===================================================== */

app.use(cors());
app.use(express.json());

/* =====================================================
   SBTET API URLS
===================================================== */

const ATTENDANCE_API =
  process.env.SBTET_ATTENDANCE_API_URL ||
  "https://www.sbtet.telangana.gov.in/api/api/PreExamination/getAttendanceReport";

const MID_RESULT_API =
  "https://www.sbtet.telangana.gov.in/api/api/Results/GetC18MidStudentWiseReport";

const SEMESTER_RESULT_API =
  "https://www.sbtet.telangana.gov.in/api/api/Results/GetStudentWiseReport";

/* =====================================================
   HELPERS
===================================================== */

function parseSBTETResponse(text) {
  let data = JSON.parse(text);

  if (typeof data === "string") {
    data = JSON.parse(data);
  }

  return data;
}

function sbtetHeaders() {
  return {
    Accept: "application/json, text/plain, */*",
    "User-Agent": "Mozilla/5.0",
    Referer: "https://www.sbtet.telangana.gov.in/",
  };
}

async function fetchSBTET(url, type = "SBTET") {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 15000);

  try {
    console.log("");
    console.log("=================================================");
    console.log(`REQUESTING ${type}`);
    console.log("=================================================");

    const response = await fetch(url, {
      method: "GET",
      headers: sbtetHeaders(),
      signal: controller.signal,
    });

    console.log(`SBTET HTTP STATUS: ${response.status}`);

    const text = await response.text();

    console.log(`SBTET RESPONSE LENGTH: ${text.length}`);

    return {
      response,
      text,
    };
  } finally {
    clearTimeout(timeout);
  }
}

/* =====================================================
   HOME
===================================================== */

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Government Polytechnic College backend is running",
  });
});

/* =====================================================
   ATTENDANCE
===================================================== */

app.get("/api/attendance", async (req, res) => {
  const pin = String(req.query.pin || "")
    .trim()
    .toUpperCase();

  if (!pin) {
    return res.status(400).json({
      success: false,
      message: "PIN number is required.",
    });
  }

  try {
    const url =
      `${ATTENDANCE_API}?pin=${encodeURIComponent(pin)}`;

    console.log(`Attendance request for PIN: ${pin}`);

    const {
      response,
      text,
    } = await fetchSBTET(url, "ATTENDANCE");

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message:
          "SBTET attendance service returned an error.",
      });
    }

    let data;

    try {
      data = parseSBTETResponse(text);
    } catch {
      return res.status(500).json({
        success: false,
        message:
          "Invalid response from SBTET attendance API.",
      });
    }

    const student =
      Array.isArray(data?.Table)
        ? data.Table[0]
        : null;

    const dailyAttendance =
      Array.isArray(data?.Table1)
        ? data.Table1
        : [];

    if (!student) {
      return res.status(404).json({
        success: false,
        message:
          "No attendance record found for this PIN.",
      });
    }

    const presentDays =
      student.NumberOfDaysPresent ??
      student.Present ??
      0;

    const workingDays =
      student.WorkingDays ??
      student.ActualWorkingDays ??
      student.TotalWorkingDays ??
      0;

    const absentDays =
      dailyAttendance.filter(
        (item) =>
          String(item?.Status || "")
            .trim()
            .toUpperCase() === "A"
      ).length;

    const percentage =
      student.Percentage ?? 0;

    const totalPercentage =
      student.TotalPercentage ?? 0;

    const examsNDP =
      student.ExamsNDP ??
      presentDays;

    const examsPer =
      student.ExamsPer ??
      totalPercentage;

    const examsWorkingDays =
      student.ExamsWorkingDays ??
      student.TotalWorkingDays ??
      0;

    return res.json({
      success: true,
      source: "SBTET",

      data: {
        name:
          student.Name ||
          student.StudentName ||
          null,

        pin:
          student.Pin ||
          student.PIN ||
          pin,

        branchCode:
          student.BranchCode ||
          student.Branch ||
          null,

        scheme:
          student.Scheme ||
          null,

        semester:
          student.Semester ||
          null,

        percentage,
        totalPercentage,

        presentDays,
        absentDays,
        workingDays,

        examsNDP,
        examsPer,
        examsWorkingDays,

        updatedDate:
          student.UpdatedDate ||
          null,

        dailyAttendance,
      },
    });

  } catch (error) {
    console.error(
      "Attendance error:",
      error.message
    );

    return res.status(500).json({
      success: false,
      message:
        error.name === "AbortError"
          ? "SBTET attendance request timed out."
          : `Unable to fetch attendance from SBTET: ${error.message}`,
    });
  }
});

/* =====================================================
   RESULT
===================================================== */

app.get("/api/result", async (req, res) => {

  const pin = String(req.query.pin || "")
    .trim()
    .toUpperCase();

  const scheme = String(
    req.query.scheme || "C24"
  )
    .trim()
    .toUpperCase();

  const semester = String(
    req.query.semester || ""
  )
    .trim()
    .toUpperCase();

  const examType = String(
    req.query.examType || ""
  ).trim();

  if (!pin) {
    return res.status(400).json({
      success: false,
      message: "PIN number is required.",
    });
  }

  /* =================================================
     SEMESTER IDs
  ================================================= */

  const semesterMap = {
    "1SEM": "1",
    "2SEM": "2",
    "3SEM": "3",
    "4SEM": "4",
    "5SEM": "5",
    "6SEM": "6",
  };

  const semYearId =
    semesterMap[semester];

  if (!semYearId) {
    return res.status(400).json({
      success: false,
      message: "Invalid semester selected.",
    });
  }

  /* =================================================
     SCHEME IDs
  ================================================= */

  const schemeMap = {
    C24: "11",

    C26:
      process.env.SBTET_C26_SCHEME_ID || "",

    ER2020:
      process.env.SBTET_ER2020_SCHEME_ID || "",

    C21:
      process.env.SBTET_C21_SCHEME_ID || "",

    C09:
      process.env.SBTET_C09_SCHEME_ID || "",

    C08:
      process.env.SBTET_C08_SCHEME_ID || "",

    C05:
      process.env.SBTET_C05_SCHEME_ID || "",

    C18:
      process.env.SBTET_C18_SCHEME_ID || "",

    C16S:
      process.env.SBTET_C16S_SCHEME_ID || "",

    C16:
      process.env.SBTET_C16_SCHEME_ID || "",

    ER91:
      process.env.SBTET_ER91_SCHEME_ID || "",

    C14:
      process.env.SBTET_C14_SCHEME_ID || "",
  };

  const schemeId =
    schemeMap[scheme];

  if (!schemeId) {
    return res.status(400).json({
      success: false,
      message:
        `SchemeId for ${scheme} is not configured in server/.env.`,
    });
  }

  try {

    /* =================================================
       MID-1 / MID-2
    ================================================= */

    if (
      examType === "Mid-1" ||
      examType === "Mid-2"
    ) {

      const examTypeId =
        examType === "Mid-1"
          ? "1"
          : "2";

      const url =
        `${MID_RESULT_API}` +
        `?ExamTypeId=${encodeURIComponent(examTypeId)}` +
        `&Pin=${encodeURIComponent(pin)}` +
        `&SchemeId=${encodeURIComponent(schemeId)}` +
        `&SemYearId=${encodeURIComponent(semYearId)}`;

      console.log(
        `Result request: ${scheme} | ${semester} | ${examType}`
      );

      const {
        response,
        text,
      } = await fetchSBTET(
        url,
        "MID RESULT"
      );

      if (!response.ok) {
        return res.status(response.status).json({
          success: false,
          message:
            "SBTET Mid result service returned an error.",
        });
      }

      let data;

      try {
        data = parseSBTETResponse(text);
      } catch {
        return res.status(500).json({
          success: false,
          message:
            "Invalid response from SBTET Mid result API.",
        });
      }

      const report =
        Array.isArray(data)
          ? data[0]
          : data;

      const subjects =
        Array.isArray(
          report?.studentWiseReport
        )
          ? report.studentWiseReport
          : [];

      const student =
        Array.isArray(
          report?.studentInfo
        )
          ? report.studentInfo[0]
          : null;

      if (
        !student &&
        subjects.length === 0
      ) {
        return res.status(404).json({
          success: false,
          message:
            "No Mid result found for the selected details.",
        });
      }

      return res.json({
        success: true,
        source: "SBTET",

        data: {
          student: {
            pin:
              student?.Pin ||
              pin,

            name:
              student?.StudentName ||
              null,

            branchName:
              student?.BranchName ||
              null,

            branchCode:
              student?.BranchCode ||
              null,

            semester:
              student?.Sem ||
              semester,

            collegeCode:
              student?.CollegeCode ||
              null,

            collegeName:
              student?.CollegeName ||
              null,

            examination:
              student?.ExamType ||
              examType,

            examMonthYear:
              student?.ExamMonthYear ||
              null,
          },

          subjects,
        },
      });
    }

    /* =================================================
       SEMESTER RESULT
    ================================================= */

    if (examType === "Semester") {

      /*
        ExamMonthYearId values are now read from .env.

        Example:

        SBTET_EXAM_MONTH_YEAR_IDS=103,102,101,100,...

        The student does NOT enter the
        ExamMonthYearId.
      */

      const examMonthYearIds = String(
        process.env.SBTET_EXAM_MONTH_YEAR_IDS || ""
      )
        .split(",")
        .map((id) => id.trim())
        .filter(Boolean);

      if (examMonthYearIds.length === 0) {
        return res.status(500).json({
          success: false,
          message:
            "SBTET_EXAM_MONTH_YEAR_IDS is not configured in server/.env.",
        });
      }

      const examTypeId = "5";

      const studentTypeId =
        process.env.SBTET_STUDENT_TYPE_ID ||
        "1";

      let foundStudent = null;
      let foundSubjects = [];
      let foundExamMonthYearId = null;

      let lastSbtetStatus = null;
      let lastSbtetMessage = null;

      /*
        =================================================
        AUTOMATIC EXAM MONTH/YEAR SEARCH
        =================================================

        IMPORTANT:

        A response containing only studentInfo
        is NOT considered a valid semester result.

        The backend requires actual subject records.
      */

      for (
        const examMonthYearId
        of examMonthYearIds
      ) {

        const url =
          `${SEMESTER_RESULT_API}` +
          `?ExamMonthYearId=${encodeURIComponent(examMonthYearId)}` +
          `&ExamTypeId=${encodeURIComponent(examTypeId)}` +
          `&Pin=${encodeURIComponent(pin)}` +
          `&SchemeId=${encodeURIComponent(schemeId)}` +
          `&SemYearId=${encodeURIComponent(semYearId)}` +
          `&StudentTypeId=${encodeURIComponent(studentTypeId)}`;

        console.log(
          `Checking ${semester} with ExamMonthYearId ${examMonthYearId}`
        );

        let response;
        let text;

        try {

          const result =
            await fetchSBTET(
              url,
              `SEMESTER RESULT - ID ${examMonthYearId}`
            );

          response = result.response;
          text = result.text;

        } catch (error) {

          console.error(
            `ExamMonthYearId ${examMonthYearId} failed:`,
            error.message
          );

          lastSbtetMessage =
            error.message;

          continue;
        }

        lastSbtetStatus =
          response.status;

        if (!response.ok) {

          console.log(
            `ExamMonthYearId ${examMonthYearId} returned HTTP ${response.status}`
          );

          continue;
        }

        let data;

        try {

          data =
            parseSBTETResponse(text);

        } catch (error) {

          console.log(
            `ExamMonthYearId ${examMonthYearId} returned invalid JSON.`
          );

          continue;
        }

        /*
          SBTET may return either:

          {
            studentInfo: [],
            studentWiseReport: []
          }

          or an array containing report objects.
        */

        const reports =
          Array.isArray(data)
            ? data
            : [data];

        let matchedStudent = null;
        let matchedSubjects = [];

        /*
          Check every report.
        */

        for (const report of reports) {

          if (
            !report ||
            typeof report !== "object"
          ) {
            continue;
          }

          const reportSubjects =
            Array.isArray(
              report.studentWiseReport
            )
              ? report.studentWiseReport
              : [];

          const reportStudents =
            Array.isArray(
              report.studentInfo
            )
              ? report.studentInfo
              : [];

          /*
            THIS IS THE IMPORTANT FIX.

            Do not accept a response containing
            only student information.

            Actual subject records are required.
          */

          if (reportSubjects.length === 0) {
            continue;
          }

          const reportStudent =
            reportStudents.length > 0
              ? reportStudents[0]
              : null;

          /*
            Check returned semester.
          */

          const returnedSemester =
            String(
              reportStudent?.Sem ||
              reportStudent?.Semester ||
              ""
            )
              .trim()
              .toUpperCase();

          if (
            returnedSemester &&
            returnedSemester !== semester
          ) {

            console.log(
              `Rejected ID ${examMonthYearId}: requested ${semester}, returned ${returnedSemester}`
            );

            continue;
          }

          matchedStudent =
            reportStudent;

          matchedSubjects =
            reportSubjects;

          break;
        }

        /*
          No subjects found for this ID.
          Try the next ExamMonthYearId.
        */

        if (
          matchedSubjects.length === 0
        ) {

          console.log(
            `ExamMonthYearId ${examMonthYearId}: no semester subjects found.`
          );

          continue;
        }

        /*
          VALID RESULT FOUND
        */

        foundStudent =
          matchedStudent;

        foundSubjects =
          matchedSubjects;

        foundExamMonthYearId =
          examMonthYearId;

        console.log(
          `VALID RESULT FOUND: ${semester}, ExamMonthYearId ${examMonthYearId}, Subjects: ${foundSubjects.length}`
        );

        break;
      }

      /*
        =================================================
        NO RESULT FOUND
        =================================================
      */

      if (
        foundSubjects.length === 0
      ) {

        return res.status(404).json({
          success: false,

          message:
            `No ${semester} semester subject records were found for this PIN.`,

          details: {
            semester,
            scheme,
            examType: "Semester",
            checkedExamMonthYearIds:
              examMonthYearIds,
            lastSbtetStatus,
            lastSbtetMessage,
          },
        });
      }

      /*
        =================================================
        TOTAL MARKS
        =================================================
      */

      const totalMarks =
        foundSubjects.reduce(
          (total, subject) => {

            const marks =
              Number(
                subject?.SubjectTotal
              );

            return (
              total +
              (
                Number.isFinite(marks)
                  ? marks
                  : 0
              )
            );

          },
          0
        );

      /*
        =================================================
        FINAL RESPONSE
        =================================================
      */

      return res.json({
        success: true,
        source: "SBTET",

        data: {

          student: {

            pin:
              foundStudent?.Pin ||
              foundStudent?.PIN ||
              pin,

            name:
              foundStudent?.StudentName ||
              foundStudent?.Name ||
              null,

            branchName:
              foundStudent?.BranchName ||
              foundStudent?.Branch ||
              null,

            branchCode:
              foundStudent?.BranchCode ||
              null,

            semester:
              foundStudent?.Sem ||
              foundStudent?.Semester ||
              semester,

            collegeCode:
              foundStudent?.CollegeCode ||
              null,

            collegeName:
              foundStudent?.CollegeName ||
              null,

            examination:
              foundStudent?.ExamType ||
              "Semester",

            examMonthYear:
              foundStudent?.ExamMonthYear ||
              null,

            examMonthYearId:
              foundExamMonthYearId,
          },

          subjects:
            foundSubjects,

          totalMarks,
        },
      });
    }

    /* =================================================
       INVALID EXAM TYPE
    ================================================= */

    return res.status(400).json({
      success: false,
      message:
        "Invalid exam type. Select Mid-1, Mid-2 or Semester.",
    });

  } catch (error) {

    console.error("");
    console.error("=================================");
    console.error("RESULT ERROR");
    console.error("Name:", error.name);
    console.error("Message:", error.message);
    console.error("Stack:", error.stack);
    console.error("=================================");
    console.error("");

    return res.status(500).json({
      success: false,
      message:
        error.name === "AbortError"
          ? "SBTET result request timed out."
          : `SBTET request failed: ${error.message}`,
    });
  }
});

/* =====================================================
   404
===================================================== */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message:
      `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

/* =====================================================
   START SERVER
===================================================== */

app.listen(
  PORT,
  "0.0.0.0",
  () => {
    console.log(
      `Server running on http://localhost:${PORT}`
    );
  }
);
