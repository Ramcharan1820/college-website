import React from "react";
import { Link } from "react-router-dom";
import {
  Cpu,
  Radio,
  Zap,
  Settings,
  Building2,
  Car,
  Pill,
  ArrowRight,
} from "lucide-react";

import "./Departments.css";

const departments = [
  {
    code: "CSE",
    title: "Computer Science & Engineering",
    text: "Programming, software development, databases, networking and modern computing technologies.",
    icon: Cpu,
    link: "/departments/cse",
  },
  {
    code: "ECE",
    title: "Electronics & Communication Engineering",
    text: "Electronic circuits, communication systems, embedded systems and modern electronics.",
    icon: Radio,
    link: "/departments/ece",
  },
  {
    code: "EEE",
    title: "Electrical & Electronics Engineering",
    text: "Electrical systems, machines, power systems, control systems and renewable energy.",
    icon: Zap,
    link: "/departments/eee",
  },
  {
    code: "ME",
    title: "Mechanical Engineering",
    text: "Machine design, manufacturing, thermodynamics, CAD/CAM and workshop technology.",
    icon: Settings,
    link: "/departments/mechanical",
  },
  {
    code: "CE",
    title: "Civil Engineering",
    text: "Construction, surveying, structural engineering, transportation and infrastructure.",
    icon: Building2,
    link: "/departments/civil",
  },
  {
    code: "AE",
    title: "Automobile Engineering",
    text: "Engine technology, auto electronics, vehicle dynamics, servicing and electric vehicle systems.",
    icon: Car,
    link: "/departments/automobile",
  },
  {
    code: "D.PHARM",
    title: "Pharmacy",
    text: "Pharmaceutics, medicinal chemistry, pharmacognosy, pharmacology and clinical drug administration.",
    icon: Pill,
    link: "/departments/pharmacy",
  },
];

function Departments() {
  return (
    <main className="departments-page">

      {/* HERO SECTION */}
      <section className="departments-hero">
        <div className="departments-hero-content">

          <span className="section-label">
            ACADEMICS
          </span>

          <h1>Departments</h1>

          <p>
            Explore the academic departments of Government
            Polytechnic College, Masab Tank and discover their
            courses, facilities and practical learning opportunities.
          </p>

        </div>

        <div className="hero-circle hero-circle-one" />
        <div className="hero-circle hero-circle-two" />
      </section>


      {/* DEPARTMENTS GRID SECTION */}
      <section className="departments-section">

        <div className="departments-heading">

          <span className="section-label dark">
            OUR ACADEMIC DEPARTMENTS
          </span>

          <h2>Choose Your Department</h2>

          <p>
            Select a department to explore its academic information,
            laboratories and learning areas.
          </p>

        </div>


        <div className="departments-grid">

          {departments.map((department) => {
            const Icon = department.icon;

            return (
              <article
                className="department-card available"
                key={department.code}
              >

                <div className="department-icon">
                  <Icon size={28} />
                </div>

                <span className="department-code">
                  {department.code}
                </span>

                <h3>{department.title}</h3>

                <p>{department.text}</p>

                <Link
                  to={department.link}
                  className="department-button"
                >
                  Explore Department
                  <ArrowRight size={16} />
                </Link>

              </article>
            );
          })}

        </div>

      </section>

    </main>
  );
}

export default Departments;