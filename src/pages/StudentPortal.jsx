import React from "react";
import {
  CalendarCheck,
  FileText,
  ClipboardList,
  ExternalLink,
} from "lucide-react";

import "./StudentPortal.css";

const links = [
  {
    title: "Student Attendance",
    text: "View your student attendance details.",
    icon: CalendarCheck,
    url: "https://www.sbtet.telangana.gov.in/index.html#!/index/StudentAttendance",
  },
  {
    title: "Student Result",
    text: "Check your Diploma examination results.",
    icon: FileText,
    url: "https://www.sbtet.telangana.gov.in/index.html#!/index/DiplomaStudentResult",
  },
  {
    title: "Consolidated Result",
    text: "View your consolidated academic result.",
    icon: ClipboardList,
    url: "https://www.sbtet.telangana.gov.in/index.html#!/index/StudentConsolidated",
  },
];

function StudentPortal() {
  return (
    <main className="student-portal-page">

      <section className="student-portal-hero">
        <div className="student-portal-container">
          <span>GOVERNMENT POLYTECHNIC COLLEGE</span>

          <h1>Student Portal</h1>

          <p>
            Access official student services through the
            Telangana State Board of Technical Education and
            Training portal.
          </p>
        </div>
      </section>


      <section className="student-portal-section">
        <div className="student-portal-container">

          <div className="student-portal-heading">
            <span>STUDENT SERVICES</span>

            <h2>Student Information</h2>

            <p>
              Select a service below to continue to the official
              SBTET Telangana website.
            </p>
          </div>


          <div className="student-portal-grid">

            {links.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="student-service-card"
                >

                  <div className="student-service-icon">
                    <Icon size={24} />
                  </div>

                  <div className="student-service-content">

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                    <span className="student-service-link">
                      Open Official Portal
                      <ExternalLink size={14} />
                    </span>

                  </div>

                </a>
              );
            })}

          </div>

        </div>
      </section>

    </main>
  );
}

export default StudentPortal;