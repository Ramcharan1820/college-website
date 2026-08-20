import React from "react";
import { Link } from "react-router-dom";
import {
  Building2,
  Ruler,
  HardHat,
  Map,
  Droplets,
  Route,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import "./CivilDepartment.css";

const areas = [
  {
    icon: Ruler,
    title: "Surveying",
    text: "Learning surveying methods, measurements and basic land mapping techniques.",
  },
  {
    icon: Building2,
    title: "Construction",
    text: "Understanding construction materials, methods and building practices.",
  },
  {
    icon: HardHat,
    title: "Structural Engineering",
    text: "Studying basic structural systems, design concepts and building safety.",
  },
  {
    icon: Map,
    title: "Geotechnical Engineering",
    text: "Introduction to soil properties, foundations and ground engineering.",
  },
  {
    icon: Route,
    title: "Transportation",
    text: "Learning the fundamentals of roads, highways and transportation systems.",
  },
  {
    icon: Droplets,
    title: "Environmental Engineering",
    text: "Understanding water, wastewater and environmental protection practices.",
  },
];

function CivilDepartment() {
  return (
    <main className="civil-page">

      {/* HERO */}
      <section className="civil-hero">
        <div className="container">

          <Link to="/departments" className="civil-back">
            <ArrowLeft size={16} />
            Back to Departments
          </Link>

          <span>ACADEMIC DEPARTMENT</span>

          <h1>
            Civil
            <strong>Engineering</strong>
          </h1>

          <p>
            Developing practical engineering knowledge in
            construction, surveying, infrastructure, structural
            systems and environmental engineering.
          </p>

        </div>
      </section>


      {/* ABOUT */}
      <section className="civil-section">
        <div className="container civil-about">

          <div>
            <span>ABOUT THE DEPARTMENT</span>

            <h2>
              Building infrastructure for the future.
            </h2>
          </div>

          <div>
            <p>
              The Civil Engineering department provides students
              with fundamental knowledge of construction, surveying,
              structural engineering, transportation and
              environmental engineering.
            </p>

            <p>
              Practical laboratory work, field activities and
              project-based learning help students develop
              technical and problem-solving skills.
            </p>
          </div>

        </div>
      </section>


      {/* VISION & MISSION */}
      <section className="civil-light-section">
        <div className="container">

          <div className="civil-heading">
            <span>OUR DIRECTION</span>
            <h2>Vision & Mission</h2>
          </div>

          <div className="civil-two-column">

            <article>
              <Building2 size={25} />

              <h3>Vision</h3>

              <p>
                To develop technically skilled civil engineering
                professionals with strong knowledge, practical
                abilities and social responsibility.
              </p>
            </article>

            <article>
              <Ruler size={25} />

              <h3>Mission</h3>

              <ul>
                <li>Develop strong civil engineering fundamentals.</li>
                <li>Provide practical laboratory and field experience.</li>
                <li>Encourage innovation and project development.</li>
                <li>Prepare students for industry and higher education.</li>
              </ul>
            </article>

          </div>

        </div>
      </section>


      {/* CORE AREAS */}
      <section className="civil-section">
        <div className="container">

          <div className="civil-heading">
            <span>ACADEMIC FOCUS</span>
            <h2>Core Areas</h2>
          </div>

          <div className="civil-grid">

            {areas.map((area, index) => {
              const Icon = area.icon;

              return (
                <article className="civil-card" key={index}>

                  <div className="civil-icon">
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
      <section className="civil-light-section">
        <div className="container">

          <div className="civil-heading">
            <span>PRACTICAL LEARNING</span>
            <h2>Laboratories</h2>
          </div>

          <div className="civil-labs">

            <div>Surveying Laboratory</div>
            <div>Concrete Technology Laboratory</div>
            <div>Soil Mechanics Laboratory</div>
            <div>Strength of Materials Laboratory</div>
            <div>Environmental Engineering Laboratory</div>
            <div>CAD Laboratory</div>

          </div>

        </div>
      </section>


      {/* DEPARTMENT DETAILS */}
      <section className="civil-section">
        <div className="container">

          <div className="civil-details">

            <div>
              <span>DEPARTMENT</span>

              <h2>
                Civil Engineering
              </h2>

              <p>
                Government Polytechnic College,
                Masab Tank, Hyderabad.
              </p>
            </div>

            <div>
              <span>STUDENT DEVELOPMENT</span>

              <ul>
                <li>Technical & Surveying Skills</li>
                <li>Construction Knowledge</li>
                <li>Project Development</li>
                <li>Industry-Oriented Knowledge</li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="civil-cta">
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

export default CivilDepartment;