import React from "react";
import { Link } from "react-router-dom";
import {
  Code2,
  Database,
  Globe,
  Network,
  BrainCircuit,
  Terminal,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import "./CSEDepartment.css";

const areas = [
  {
    icon: Code2,
    title: "Programming",
    text: "Developing programming, logical thinking and problem-solving skills.",
  },
  {
    icon: Globe,
    title: "Web Development",
    text: "Learning modern web technologies and application development.",
  },
  {
    icon: Database,
    title: "Database Systems",
    text: "Understanding databases, data management and information systems.",
  },
  {
    icon: Network,
    title: "Computer Networks",
    text: "Learning networking concepts, communication and network security.",
  },
  {
    icon: BrainCircuit,
    title: "Artificial Intelligence",
    text: "Introduction to AI, machine learning and intelligent applications.",
  },
  {
    icon: Terminal,
    title: "Software Development",
    text: "Developing software applications using practical engineering methods.",
  },
];

function CSEDepartment() {
  return (
    <main className="cse-page">

      {/* HERO */}
      <section className="cse-hero">
        <div className="container">

          <Link to="/departments" className="cse-back">
            <ArrowLeft size={16} />
            Back to Departments
          </Link>

          <span>ACADEMIC DEPARTMENT</span>

          <h1>
            Computer Science &
            <strong>Engineering</strong>
          </h1>

          <p>
            Developing programming, computing, problem-solving and
            modern technical skills through practical and
            application-oriented learning.
          </p>

        </div>
      </section>


      {/* ABOUT */}
      <section className="cse-section">
        <div className="container cse-about">

          <div>
            <span>ABOUT THE DEPARTMENT</span>

            <h2>
              Computing, innovation and technology.
            </h2>
          </div>

          <div>
            <p>
              The Computer Science & Engineering department
              provides students with strong foundations in
              programming, computer systems, databases, networking
              and software development.
            </p>

            <p>
              Students develop practical skills through laboratory
              exercises, programming activities, projects and
              application-based learning.
            </p>
          </div>

        </div>
      </section>


      {/* VISION & MISSION */}
      <section className="cse-light-section">
        <div className="container">

          <div className="cse-heading">
            <span>OUR DIRECTION</span>
            <h2>Vision & Mission</h2>
          </div>

          <div className="cse-two-column">

            <article>
              <Code2 size={25} />

              <h3>Vision</h3>

              <p>
                To develop technically skilled and innovative
                computer professionals with strong knowledge,
                practical abilities and problem-solving skills.
              </p>
            </article>

            <article>
              <BrainCircuit size={25} />

              <h3>Mission</h3>

              <ul>
                <li>Develop strong programming fundamentals.</li>
                <li>Provide practical computer laboratory experience.</li>
                <li>Encourage innovation and project development.</li>
                <li>Prepare students for industry and higher education.</li>
              </ul>
            </article>

          </div>

        </div>
      </section>


      {/* CORE AREAS */}
      <section className="cse-section">
        <div className="container">

          <div className="cse-heading">
            <span>ACADEMIC FOCUS</span>
            <h2>Core Areas</h2>
          </div>

          <div className="cse-grid">

            {areas.map((area, index) => {
              const Icon = area.icon;

              return (
                <article className="cse-card" key={index}>

                  <div className="cse-icon">
                    <Icon size={23} />
                  </div>

                  <h3>{area.title}</h3>

                  <p>{area.text}</p>

                </article>
              );
            })}

          </div>

        </div>
      </section>


      {/* LABORATORIES */}
      <section className="cse-light-section">
        <div className="container">

          <div className="cse-heading">
            <span>PRACTICAL LEARNING</span>
            <h2>Laboratories</h2>
          </div>

          <div className="cse-labs">

            <div>Programming Laboratory</div>
            <div>Database Laboratory</div>
            <div>Web Development Laboratory</div>
            <div>Computer Networks Laboratory</div>
            <div>Software Development Laboratory</div>
            <div>Computer Hardware Laboratory</div>

          </div>

        </div>
      </section>


      {/* DEPARTMENT DETAILS */}
      <section className="cse-section">
        <div className="container">

          <div className="cse-details">

            <div>
              <span>DEPARTMENT</span>

              <h2>
                Computer Science & Engineering
              </h2>

              <p>
                Government Polytechnic College,
                Masab Tank, Hyderabad.
              </p>
            </div>

            <div>
              <span>STUDENT DEVELOPMENT</span>

              <ul>
                <li>Programming Skills</li>
                <li>Problem Solving</li>
                <li>Project Development</li>
                <li>Industry-Oriented Knowledge</li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="cse-cta">
        <div className="container">

          <div>
            <span>EXPLORE MORE</span>

            <h2>
              Explore other academic departments.
            </h2>
          </div>

          <Link to="/departments">
            View Departments
            <ArrowRight size={17} />
          </Link>

        </div>
      </section>

    </main>
  );
}

export default CSEDepartment;