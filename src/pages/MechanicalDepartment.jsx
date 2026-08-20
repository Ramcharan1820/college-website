import React from "react";
import { Link } from "react-router-dom";
import {
  Settings,
  Cog,
  Factory,
  Wrench,
  Car,
  Thermometer,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import "./MechanicalDepartment.css";

const areas = [
  {
    icon: Settings,
    title: "Machine Design",
    text: "Learning the fundamentals of machine components, mechanisms and design.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    text: "Understanding manufacturing processes, production methods and workshop practices.",
  },
  {
    icon: Thermometer,
    title: "Thermodynamics",
    text: "Studying heat, energy, thermodynamic systems and engineering applications.",
  },
  {
    icon: Cog,
    title: "CAD & CAM",
    text: "Developing skills in computer-aided design and manufacturing technologies.",
  },
  {
    icon: Car,
    title: "Automobile Engineering",
    text: "Introduction to vehicle systems, engines and automobile technologies.",
  },
  {
    icon: Wrench,
    title: "Workshop Technology",
    text: "Developing practical skills in machining, fabrication and workshop operations.",
  },
];

function MechanicalDepartment() {
  return (
    <main className="mechanical-page">

      {/* HERO */}
      <section className="mechanical-hero">
        <div className="container">

          <Link to="/departments" className="mechanical-back">
            <ArrowLeft size={16} />
            Back to Departments
          </Link>

          <span>ACADEMIC DEPARTMENT</span>

          <h1>
            Mechanical
            <strong>Engineering</strong>
          </h1>

          <p>
            Developing practical engineering knowledge in
            manufacturing, machine design, thermodynamics,
            automobile systems and modern mechanical technologies.
          </p>

        </div>
      </section>


      {/* ABOUT */}
      <section className="mechanical-section">
        <div className="container mechanical-about">

          <div>
            <span>ABOUT THE DEPARTMENT</span>

            <h2>
              Machines, manufacturing and innovation.
            </h2>
          </div>

          <div>
            <p>
              The Mechanical Engineering department provides
              students with fundamental knowledge of machines,
              manufacturing processes, thermodynamics and
              mechanical systems.
            </p>

            <p>
              Practical workshop activities, laboratory experiments
              and project-based learning help students develop
              technical and problem-solving skills.
            </p>
          </div>

        </div>
      </section>


      {/* VISION & MISSION */}
      <section className="mechanical-light-section">
        <div className="container">

          <div className="mechanical-heading">
            <span>OUR DIRECTION</span>
            <h2>Vision & Mission</h2>
          </div>

          <div className="mechanical-two-column">

            <article>
              <Settings size={25} />

              <h3>Vision</h3>

              <p>
                To develop technically competent students with
                strong mechanical engineering knowledge, practical
                skills and professional responsibility.
              </p>
            </article>

            <article>
              <Cog size={25} />

              <h3>Mission</h3>

              <ul>
                <li>Develop strong mechanical engineering fundamentals.</li>
                <li>Provide practical workshop and laboratory experience.</li>
                <li>Encourage innovation and project development.</li>
                <li>Prepare students for industry and higher education.</li>
              </ul>
            </article>

          </div>

        </div>
      </section>


      {/* CORE AREAS */}
      <section className="mechanical-section">
        <div className="container">

          <div className="mechanical-heading">
            <span>ACADEMIC FOCUS</span>
            <h2>Core Areas</h2>
          </div>

          <div className="mechanical-grid">

            {areas.map((area, index) => {
              const Icon = area.icon;

              return (
                <article className="mechanical-card" key={index}>

                  <div className="mechanical-icon">
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
      <section className="mechanical-light-section">
        <div className="container">

          <div className="mechanical-heading">
            <span>PRACTICAL LEARNING</span>
            <h2>Laboratories & Workshops</h2>
          </div>

          <div className="mechanical-labs">

            <div>Workshop Practice Laboratory</div>
            <div>Manufacturing Technology Laboratory</div>
            <div>Thermal Engineering Laboratory</div>
            <div>Machine Tools Laboratory</div>
            <div>CAD / CAM Laboratory</div>
            <div>Automobile Engineering Laboratory</div>

          </div>

        </div>
      </section>


      {/* DEPARTMENT DETAILS */}
      <section className="mechanical-section">
        <div className="container">

          <div className="mechanical-details">

            <div>
              <span>DEPARTMENT</span>

              <h2>
                Mechanical Engineering
              </h2>

              <p>
                Government Polytechnic College,
                Masab Tank, Hyderabad.
              </p>
            </div>

            <div>
              <span>STUDENT DEVELOPMENT</span>

              <ul>
                <li>Mechanical Design Skills</li>
                <li>Workshop & Manufacturing Skills</li>
                <li>Project Development</li>
                <li>Industry-Oriented Knowledge</li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="mechanical-cta">
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

export default MechanicalDepartment;