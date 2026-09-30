import { useState } from "react";
import "./Result.css";
import MidResult from "./MidResult";
import SemesterResult from "./SemesterResult";

function Result() {
  const [pin, setPin] = useState("");
  const [scheme, setScheme] = useState("C24");
  const [semester, setSemester] = useState("5SEM");
  const [examType, setExamType] = useState("Mid-1");

  const [examMonthYear, setExamMonthYear] =
    useState("APR-2026");

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleExamTypeChange = (value) => {
    setExamType(value);
    setResult(null);
    setError("");
  };

  const handleSemesterChange = (value) => {
    setSemester(value);
    setResult(null);
    setError("");

    /*
      Currently verified:
      5SEM -> APR-2026
    */

    if (value === "5SEM") {
      setExamMonthYear("APR-2026");
    } else {
      setExamMonthYear("");
    }
  };

  const handleViewResult = async (e) => {
    e.preventDefault();

    setError("");
    setResult(null);

    if (!pin.trim()) {
      setError("Please enter your PIN.");
      return;
    }

    /*
      Exam Month & Year is required ONLY
      when Semester is selected.
    */
    if (
      examType === "Semester" &&
      !examMonthYear
    ) {
      setError(
        "Please select the Exam Month & Year for the Semester result."
      );
      return;
    }

    setLoading(true);

    try {
      const params = new URLSearchParams();

      params.append(
        "pin",
        pin.trim().toUpperCase()
      );

      params.append("scheme", scheme);
      params.append("semester", semester);
      params.append("examType", examType);

      /*
        VERY IMPORTANT:

        Do NOT send examMonthYear for Mid-1
        or Mid-2.

        Send it ONLY for Semester.
      */
      if (examType === "Semester") {
        params.append(
          "examMonthYear",
          examMonthYear
        );
      }

      console.log(
        "Result request:",
        params.toString()
      );

      const response = await fetch(
        `http://localhost:5000/api/result?${params.toString()}`
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message ||
            "Unable to fetch result from SBTET."
        );
      }

      setResult(data);
    } catch (err) {
      console.error("Result error:", err);

      setError(
        err.message ||
          "Unable to fetch result."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="result-page">

      {/* HERO */}
      <section className="result-hero">
        <div className="result-hero-content">

          <span className="result-badge">
            STUDENT PORTAL
          </span>

          <h1>Student Result</h1>

          <p>
            View your examination result directly
            from SBTET.
          </p>

        </div>
      </section>

      {/* SEARCH */}
      <section className="result-container">

        <div className="result-search-card">

          <div className="search-heading">

            <div className="search-icon">
              ✓
            </div>

            <div>
              <h2>Check Result</h2>

              <p>
                Enter your details to view your
                result.
              </p>
            </div>

          </div>

          <form onSubmit={handleViewResult}>

            <div className="result-form-grid">

              {/* PIN */}
              <div className="form-group">

                <label htmlFor="pin">
                  Student PIN
                </label>

                <input
                  id="pin"
                  type="text"
                  placeholder="Example: 24001-CS-127"
                  value={pin}
                  onChange={(e) =>
                    setPin(e.target.value)
                  }
                  autoComplete="off"
                />

              </div>

              {/* SCHEME */}
              <div className="form-group">

                <label htmlFor="scheme">
                  Scheme
                </label>

                <select
                  id="scheme"
                  value={scheme}
                  onChange={(e) => {
                    setScheme(e.target.value);
                    setResult(null);
                    setError("");
                  }}
                >
                  <option value="C24">
                    C24
                  </option>

                  <option value="C26">
                    C26
                  </option>

                  <option value="C18">
                    C18
                  </option>

                  <option value="C16">
                    C16
                  </option>
                </select>

              </div>

              {/* SEMESTER */}
              <div className="form-group">

                <label htmlFor="semester">
                  Semester
                </label>

                <select
                  id="semester"
                  value={semester}
                  onChange={(e) =>
                    handleSemesterChange(
                      e.target.value
                    )
                  }
                >
                  <option value="1SEM">
                    1SEM
                  </option>

                  <option value="2SEM">
                    2SEM
                  </option>

                  <option value="3SEM">
                    3SEM
                  </option>

                  <option value="4SEM">
                    4SEM
                  </option>

                  <option value="5SEM">
                    5SEM
                  </option>

                  <option value="6SEM">
                    6SEM
                  </option>
                </select>

              </div>

              {/* EXAM TYPE */}
              <div className="form-group">

                <label htmlFor="examType">
                  Exam Type
                </label>

                <select
                  id="examType"
                  value={examType}
                  onChange={(e) =>
                    handleExamTypeChange(
                      e.target.value
                    )
                  }
                >
                  <option value="Mid-1">
                    Mid-1
                  </option>

                  <option value="Mid-2">
                    Mid-2
                  </option>

                  <option value="Semester">
                    Semester
                  </option>
                </select>

              </div>

              {/* ONLY FOR SEMESTER */}
              {examType === "Semester" && (
                <div className="form-group semester-only-field">

                  <label htmlFor="examMonthYear">
                    Exam Month & Year
                  </label>

                  {semester === "5SEM" ? (
                    <select
                      id="examMonthYear"
                      value={examMonthYear}
                      onChange={(e) => {
                        setExamMonthYear(
                          e.target.value
                        );

                        setResult(null);
                        setError("");
                      }}
                    >
                      <option value="APR-2026">
                        APR-2026
                      </option>
                    </select>
                  ) : (
                    <select
                      id="examMonthYear"
                      value=""
                      onChange={(e) =>
                        setExamMonthYear(
                          e.target.value
                        )
                      }
                    >
                      <option value="">
                        No verified exam month/year
                      </option>
                    </select>
                  )}

                  <small>
                    Required by SBTET only for
                    Semester results.
                  </small>

                </div>
              )}

            </div>

            <button
              type="submit"
              className="view-result-btn"
              disabled={loading}
            >

              {loading ? (
                <>
                  <span className="result-spinner"></span>

                  Fetching Result...
                </>
              ) : (
                <>
                  <span>
                    View Result
                  </span>

                  <span className="arrow">
                    →
                  </span>
                </>
              )}

            </button>

          </form>

          {error && (
            <div className="result-error">

              <strong>
                Unable to fetch result
              </strong>

              <p>
                {error}
              </p>

            </div>
          )}

        </div>

        {/* RESULT OUTPUT */}
        {result && (
          <div className="result-output">

            {examType === "Semester" ? (
              <SemesterResult
                result={result}
              />
            ) : (
              <MidResult
                result={result}
                examType={examType}
              />
            )}

          </div>
        )}

      </section>

    </div>
  );
}

export default Result;