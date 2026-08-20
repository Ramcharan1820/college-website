import React from "react";
import { Link } from "react-router-dom";
import {
  Zap,
  Settings,
  CircuitBoard,
  BatteryCharging,
  Sun,
  Activity,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import "./EEEDepartment.css";

const areas = [
  {
    icon: Zap,
    title: "Electrical Circuits",
    text: "Learning electrical circuit concepts, measurements and practical applications.",
  },
  {
    icon: Settings,
    title: "Electrical Machines",
    text: "Understanding transformers, motors, generators and their applications.",
  },
  {
    icon: Activity,
    title: "Power Systems",
    text: "Introduction to electrical power generation, transmission and distribution.",
  },
  {
    icon: CircuitBoard,
    title: "Control Systems",
    text: "Learning basic control concepts and automation applications.",
  },
  {
    icon: BatteryCharging,
    title: "Power Electronics",
    text: "Studying electronic devices used for power conversion and control.",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    text: "Exploring solar energy and other modern electrical energy technologies.",
  },
];

function EEEDepartment() {
  return (
    <main className="eee-page">

      {/* HERO */}
      <section className="eee-hero">
        <div className="container">

          <Link to="/departments" className="eee-back">
            <ArrowLeft size={16} />
            Back to Departments
          </Link>

          <span>ACADEMIC DEPARTMENT</span>

          <h1>
            Electrical & Electronics
            <strong>Engineering</strong>
          </h1>

          <p>
            Developing technical knowledge and practical skills
            in electrical systems, electronics, power systems,
            machines and modern energy technologies.
          </p>

        </div>
      </section>


      {/* ABOUT */}
      <section className="eee-section">
        <div className="container eee-about">

          <div>
            <span>ABOUT THE DEPARTMENT</span>

            <h2>
              Electrical systems, energy and technology.
            </h2>
          </div>

          <div>
            <p>
              The Electrical & Electronics Engineering department
              provides students with fundamental knowledge of
              electrical circuits, machines, power systems,
              electronics and control systems.
            </p>

            <p>
              Practical laboratory work and project-based learning
              help students develop technical and problem-solving
              skills for modern electrical applications.
            </p>
          </div>

        </div>
      </section>


      {/* VISION & MISSION */}
      <section className="eee-light-section">
        <div className="container">

          <div className="eee-heading">
            <span>OUR DIRECTION</span>
            <h2>Vision & Mission</h2>
          </div>

          <div className="eee-two-column">

            <article>
              <Zap size={25} />

              <h3>Vision</h3>

              <p>
                To develop technically skilled students with
                strong electrical engineering knowledge,
                practical abilities and professional skills.
              </p>
            </article>

            <article>
              <CircuitBoard size={25} />

              <h3>Mission</h3>

              <ul>
                <li>Develop strong electrical fundamentals.</li>
                <li>Provide practical laboratory experience.</li>
                <li>Encourage technical projects and innovation.</li>
                <li>Prepare students for industry and higher education.</li>
              </ul>
            </article>

          </div>

        </div>
      </section>


      {/* CORE AREAS */}
      <section className="eee-section">
        <div className="container">

          <div className="eee-heading">
            <span>ACADEMIC FOCUS</span>
            <h2>Core Areas</h2>
          </div>

          <div className="eee-grid">

            {areas.map((area, index) => {
              const Icon = area.icon;

              return (
                <article className="eee-card" key={index}>

                  <div className="eee-icon">
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
      <section className="eee-light-section">
        <div className="container">

          <div className="eee-heading">
            <span>PRACTICAL LEARNING</span>
            <h2>Laboratories</h2>
          </div>

          <div className="eee-labs">

            <div>Electrical Machines Laboratory</div>
            <div>Electrical Measurements Laboratory</div>
            <div>Power Systems Laboratory</div>
            <div>Power Electronics Laboratory</div>
            <div>Control Systems Laboratory</div>
            <div>Electrical Workshop</div>

          </div>

        </div>
      </section>


      {/* DEPARTMENT DETAILS */}
      <section className="eee-section">
        <div className="container">

          <div className="eee-details">

            <div>
              <span>DEPARTMENT</span>

              <h2>
                Electrical & Electronics Engineering
              </h2>

              <p>
                Government Polytechnic College,
                Masab Tank, Hyderabad.
              </p>
            </div>

            <div>
              <span>STUDENT DEVELOPMENT</span>

              <ul>
                <li>Electrical Engineering Skills</li>
                <li>Practical Laboratory Skills</li>
                <li>Project Development</li>
                <li>Industry-Oriented Knowledge</li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="eee-cta">
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

export default EEEDepartment;