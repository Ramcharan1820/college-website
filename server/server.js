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

  // SBTET sometimes returns JSON inside a string
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

async function fetchSBTET(url) {
  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 15000);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: sbtetHeaders(),
      signal: controller.signal,
    });

    const text = await response.text();

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

    console.log(`Attendance request: ${pin}`);

    const { response, text } = await fetchSBTET(url);

    if (!response.ok) {
      return res.status(response.status).json({
        success: false,
        message: "SBTET attendance service returned an error.",
      });
    }

    let data;

    try {
      data = parseSBTETResponse(text);
    } catch {
      return res.status(500).json({
        success: false,
        message: "Invalid response from SBTET attendance API.",
      });
    }

    const student = Array.isArray(data?.Table)
      ? data.Table[0]
      : null;

    const dailyAttendance = Array.isArray(data?.Table1)
      ? data.Table1
      : [];

    if (!student) {
      return res.status(404).json({
        success: false,
        message: "No attendance record found for this PIN.",
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

    const absentDays = dailyAttendance.filter(
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
      student.ExamsNDP ?? presentDays;

    const examsPer =
      student.ExamsPer ?? totalPercentage;

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
    console.error("Attendance error:", error.message);

    return res.status(500).json({
      success: false,
      message:
        error.name === "AbortError"
          ? "SBTET attendance request timed out."
          : "Unable to fetch attendance from SBTET.",
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

  const scheme = String(req.query.scheme || "C24")
    .trim()
    .toUpperCase();

  const semester = String(req.query.semester || "")
    .trim()
    .toUpperCase();

  const examType = String(req.query.examType || "")
    .trim();

  const examMonthYear = String(
    req.query.examMonthYear || ""
  )
    .trim()
    .toUpperCase();

  if (!pin) {
    return res.status(400).json({
      success: false,
      message: "PIN number is required.",
    });
  }

  /* =================================================
     SEMESTER MAP
  ================================================= */

  const semesterMap = {
    "1SEM": "1",
    "2SEM": "2",
    "3SEM": "3",
    "4SEM": "4",
    "5SEM": "5",
    "6SEM": "6",
  };

  const semYearId = semesterMap[semester];

  if (!semYearId) {
    return res.status(400).json({
      success: false,
      message: "Invalid semester selected.",
    });
  }

  /* =================================================
     SCHEME MAP
  ================================================= */

  const schemeMap = {
    C24: "11",
    C18: "18",
    C16: "16",
    C26: process.env.SBTET_C26_SCHEME_ID || "",
  };

  const schemeId = schemeMap[scheme];

  if (!schemeId) {
    return res.status(400).json({
      success: false,
      message: `SchemeId for ${scheme} is not configured.`,
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
        `Result request: ${pin} | ${examType}`
      );

      const { response, text } =
        await fetchSBTET(url);

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

      const report = Array.isArray(data)
        ? data[0]
        : data;

      const subjects =
        Array.isArray(report?.studentWiseReport)
          ? report.studentWiseReport
          : [];

      const student =
        Array.isArray(report?.studentInfo)
          ? report.studentInfo[0]
          : null;

      if (!student && subjects.length === 0) {
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
      if (!examMonthYear) {
        return res.status(400).json({
          success: false,
          message:
            "Please select Exam Month & Year for the Semester result.",
        });
      }

      /*
        Add more verified combinations here
        when required.
      */

      const examMonthYearMap = {
        "5SEM": {
          "APR-2026": "4",
        },
      };

      const examMonthYearId =
        examMonthYearMap[semester]?.[examMonthYear];

      if (!examMonthYearId) {
        return res.status(400).json({
          success: false,
          message:
            `Exam Month & Year is not configured for ${semester}.`,
        });
      }

      const examTypeId = "5";

      const studentTypeId =
        process.env.SBTET_STUDENT_TYPE_ID || "1";

      const url =
        `${SEMESTER_RESULT_API}` +
        `?ExamMonthYearId=${encodeURIComponent(examMonthYearId)}` +
        `&ExamTypeId=${encodeURIComponent(examTypeId)}` +
        `&Pin=${encodeURIComponent(pin)}` +
        `&SchemeId=${encodeURIComponent(schemeId)}` +
        `&SemYearId=${encodeURIComponent(semYearId)}` +
        `&StudentTypeId=${encodeURIComponent(studentTypeId)}`;

      console.log(
        `Result request: ${pin} | Semester`
      );

      const { response, text } =
        await fetchSBTET(url);

      if (!response.ok) {
        return res.status(response.status).json({
          success: false,
          message:
            "SBTET semester result service returned an error.",
        });
      }

      let data;

      try {
        data = parseSBTETResponse(text);
      } catch {
        return res.status(500).json({
          success: false,
          message:
            "Invalid response from SBTET semester API.",
        });
      }

      const report = Array.isArray(data)
        ? data[0]
        : data;

      const subjects =
        Array.isArray(report?.studentWiseReport)
          ? report.studentWiseReport
          : [];

      const student =
        Array.isArray(report?.studentInfo)
          ? report.studentInfo[0]
          : null;

      const subjectGradeInfo =
        Array.isArray(report?.branchSubjectGradeInfo)
          ? report.branchSubjectGradeInfo
          : [];

      const studentSGPACGPAInfo =
        Array.isArray(report?.studentSGPACGPAInfo)
          ? report.studentSGPACGPAInfo
          : [];

      const studentActivities =
        Array.isArray(report?.studentActvities)
          ? report.studentActvities
          : [];

      const studentSubjectTotal =
        Array.isArray(report?.studentSubjectTotal)
          ? report.studentSubjectTotal
          : [];

      const cumulativeGradeInfo =
        Array.isArray(report?.CumulativeGradeInfo)
          ? report.CumulativeGradeInfo
          : [];

      if (!student && subjects.length === 0) {
        return res.status(404).json({
          success: false,
          message:
            "No semester result found for the selected details.",
        });
      }

      /* =================================================
         SUMMARY
      ================================================= */

      const totalMarks = subjects.reduce(
        (total, subject) => {
          const marks = Number(
            subject?.SubjectTotal
          );

          return total +
            (Number.isFinite(marks)
              ? marks
              : 0);
        },
        0
      );

      const totals =
        studentSubjectTotal[0] || {};

      const sgpa =
        studentSGPACGPAInfo[0]?.SGPA ?? null;

      const cgpa =
        studentSGPACGPAInfo[0]?.CGPA ?? null;

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
              "Semester",

            examMonthYear:
              student?.ExamMonthYear ||
              examMonthYear,
          },

          subjects,

          subjectGradeInfo,

          studentSGPACGPAInfo,

          studentActivities,

          studentSubjectTotal,

          cumulativeGradeInfo,

          summary: {
            totalSubjects: subjects.length,

            totalMarks,

            totalCredits:
              totals.TotalCredits ?? null,

            totalCreditsEarned:
              totals.TotalCreditsEarned ?? null,

            result:
              totals.Result ?? null,

            sgpa,

            cgpa,

            academicYear:
              totals.AcadamicYear ?? null,
          },
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
    console.error("Result error:", error.message);

    return res.status(500).json({
      success: false,
      message:
        error.name === "AbortError"
          ? "SBTET result request timed out."
          : "Unable to fetch result from SBTET.",
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

app.listen(PORT, "0.0.0.0", () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});
