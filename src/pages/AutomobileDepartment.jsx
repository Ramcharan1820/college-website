import React from "react";
import { Link } from "react-router-dom";
import {
  Wrench,
  Gauge,
  Cpu,
  ShieldCheck,
  Zap,
  Flame,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import "./AutomobileDepartment.css";

const areas = [
  {
    icon: Flame,
    title: "Engine Technology",
    text: "Understanding internal combustion engines, fuel systems, and thermodynamics.",
  },
  {
    icon: Gauge,
    title: "Vehicle Dynamics",
    text: "Studying suspension, steering, braking, and overall vehicle handling mechanics.",
  },
  {
    icon: Cpu,
    title: "Automotive Electronics",
    text: "Exploring ECU systems, sensors, wiring, and modern vehicle diagnostics.",
  },
  {
    icon: Zap,
    title: "Electric & Hybrid Vehicles",
    text: "Introduction to EV powertrains, battery management systems, and green mobility.",
  },
  {
    icon: Wrench,
    title: "Auto Servicing & Repair",
    text: "Hands-on maintenance, troubleshooting, and overhaul of modern automobiles.",
  },
  {
    icon: ShieldCheck,
    title: "Vehicle Safety & Emission",
    text: "Learning vehicle safety standards, crash testing concepts, and emission control.",
  },
];

function AutomobileDepartment() {
  return (
    <main className="ae-page">

      {/* HERO */}
      <section className="ae-hero">
        <div className="container">

          <Link to="/departments" className="ae-back">
            <ArrowLeft size={16} />
            Back to Departments
          </Link>

          <span>ACADEMIC DEPARTMENT</span>

          <h1>
            Automobile
            <strong>Engineering</strong>
          </h1>

          <p>
            Building strong technical skills in vehicle design, engine technology,
            modern diagnostic methods, and sustainable transport systems.
          </p>

        </div>
      </section>


      {/* ABOUT */}
      <section className="ae-section">
        <div className="container ae-about">

          <div>
            <span>ABOUT THE DEPARTMENT</span>

            <h2>
              Mobility, mechanical precision, and future transport.
            </h2>
          </div>

          <div>
            <p>
              The Automobile Engineering department trains students in the design,
              testing, servicing, and manufacturing of modern automotive vehicles.
            </p>

            <p>
              Students gain hands-on technical skills through practical workshop
              sessions, vehicle dismantling, engine tuning, and exposure to emerging
              Electric Vehicle (EV) technologies.
            </p>
          </div>

        </div>
      </section>


      {/* VISION & MISSION */}
      <section className="ae-light-section">
        <div className="container">

          <div className="ae-heading">
            <span>OUR DIRECTION</span>
            <h2>Vision & Mission</h2>
          </div>

          <div className="ae-two-column">

            <article>
              <Wrench size={25} />

              <h3>Vision</h3>

              <p>
                To develop highly skilled and industry-ready automobile technicians
                capable of adapting to evolving vehicle technologies and sustainable mobility.
              </p>
            </article>

            <article>
              <Gauge size={25} />

              <h3>Mission</h3>

              <ul>
                <li>Provide strong fundamentals in vehicle mechanical and electrical systems.</li>
                <li>Deliver hands-on training using modern diagnostic equipment.</li>
                <li>Promote awareness of eco-friendly and electric vehicle technologies.</li>
                <li>Prepare students for immediate industry roles and higher education.</li>
              </ul>
            </article>

          </div>

        </div>
      </section>


      {/* CORE AREAS */}
      <section className="ae-section">
        <div className="container">

          <div className="ae-heading">
            <span>ACADEMIC FOCUS</span>
            <h2>Core Areas</h2>
          </div>

          <div className="ae-grid">

            {areas.map((area, index) => {
              const Icon = area.icon;

              return (
                <article className="ae-card" key={index}>

                  <div className="ae-icon">
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
      <section className="ae-light-section">
        <div className="container">

          <div className="ae-heading">
            <span>PRACTICAL LEARNING</span>
            <h2>Laboratories & Workshops</h2>
          </div>

          <div className="ae-labs">

            <div>Automobile Engines Laboratory</div>
            <div>Chassis & Suspension Laboratory</div>
            <div>Auto Electrical & Electronics Lab</div>
            <div>Vehicle Servicing Workshop</div>
            <div>Autotronics & CAD Laboratory</div>
            <div>Fuels & Lubricants Testing Lab</div>

          </div>

        </div>
      </section>


      {/* DEPARTMENT DETAILS */}
      <section className="ae-section">
        <div className="container">

          <div className="ae-details">

            <div>
              <span>DEPARTMENT</span>

              <h2>
                Automobile Engineering
              </h2>

              <p>
                Government Polytechnic College,
                Masab Tank, Hyderabad.
              </p>
            </div>

            <div>
              <span>STUDENT DEVELOPMENT</span>

              <ul>
                <li>Engine & Chassis Overhauling</li>
                <li>Fault Diagnostics & Servicing</li>
                <li>CAD & Automotive Design Basics</li>
                <li>EV Maintenance Skills</li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="ae-cta">
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

export default AutomobileDepartment;