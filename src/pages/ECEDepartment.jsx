import React from "react";
import { Link } from "react-router-dom";
import {
  Radio,
  Cpu,
  CircuitBoard,
  Wifi,
  Microchip,
  Activity,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import "./ECEDepartment.css";

const areas = [
  {
    icon: CircuitBoard,
    title: "Electronic Circuits",
    text: "Learning analog and digital electronic circuits and their practical applications.",
  },
  {
    icon: Radio,
    title: "Communication Systems",
    text: "Understanding communication principles, signals and transmission systems.",
  },
  {
    icon: Microchip,
    title: "Microcontrollers",
    text: "Developing knowledge of microcontrollers and embedded applications.",
  },
  {
    icon: Wifi,
    title: "Communication Networks",
    text: "Learning wireless communication, networking and modern connectivity.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    text: "Exploring hardware and software integration in embedded systems.",
  },
  {
    icon: Activity,
    title: "Signals & Systems",
    text: "Understanding signals, systems and their engineering applications.",
  },
];

function ECEDepartment() {
  return (
    <main className="ece-page">

      {/* HERO */}
      <section className="ece-hero">
        <div className="container">

          <Link to="/departments" className="ece-back">
            <ArrowLeft size={16} />
            Back to Departments
          </Link>

          <span>ACADEMIC DEPARTMENT</span>

          <h1>
            Electronics &
            <strong>Communication Engineering</strong>
          </h1>

          <p>
            Developing practical knowledge in electronics,
            communication systems, embedded technology and
            modern electronic applications.
          </p>

        </div>
      </section>


      {/* ABOUT */}
      <section className="ece-section">
        <div className="container ece-about">

          <div>
            <span>ABOUT THE DEPARTMENT</span>

            <h2>
              Electronics, communication and innovation.
            </h2>
          </div>

          <div>
            <p>
              The Electronics & Communication Engineering
              department provides students with fundamental
              knowledge of electronic circuits, communication
              systems, microcontrollers and embedded technology.
            </p>

            <p>
              Laboratory work and project-based learning help
              students develop practical skills and understand
              real-world electronic applications.
            </p>
          </div>

        </div>
      </section>


      {/* VISION & MISSION */}
      <section className="ece-light-section">
        <div className="container">

          <div className="ece-heading">
            <span>OUR DIRECTION</span>
            <h2>Vision & Mission</h2>
          </div>

          <div className="ece-two-column">

            <article>
              <Radio size={25} />

              <h3>Vision</h3>

              <p>
                To develop technically skilled students with
                strong knowledge of electronics, communication
                and modern embedded technologies.
              </p>
            </article>

            <article>
              <Microchip size={25} />

              <h3>Mission</h3>

              <ul>
                <li>Develop strong electronics fundamentals.</li>
                <li>Provide practical laboratory experience.</li>
                <li>Encourage innovation and technical projects.</li>
                <li>Prepare students for industry and higher education.</li>
              </ul>
            </article>

          </div>

        </div>
      </section>


      {/* CORE AREAS */}
      <section className="ece-section">
        <div className="container">

          <div className="ece-heading">
            <span>ACADEMIC FOCUS</span>
            <h2>Core Areas</h2>
          </div>

          <div className="ece-grid">

            {areas.map((area, index) => {
              const Icon = area.icon;

              return (
                <article className="ece-card" key={index}>

                  <div className="ece-icon">
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
      <section className="ece-light-section">
        <div className="container">

          <div className="ece-heading">
            <span>PRACTICAL LEARNING</span>
            <h2>Laboratories</h2>
          </div>

          <div className="ece-labs">

            <div>Electronic Circuits Laboratory</div>
            <div>Digital Electronics Laboratory</div>
            <div>Communication Laboratory</div>
            <div>Microcontroller Laboratory</div>
            <div>Embedded Systems Laboratory</div>
            <div>Computer & Networking Laboratory</div>

          </div>

        </div>
      </section>


      {/* DETAILS */}
      <section className="ece-section">
        <div className="container">

          <div className="ece-details">

            <div>
              <span>DEPARTMENT</span>

              <h2>
                Electronics & Communication Engineering
              </h2>

              <p>
                Government Polytechnic College,
                Masab Tank, Hyderabad.
              </p>
            </div>

            <div>
              <span>STUDENT DEVELOPMENT</span>

              <ul>
                <li>Electronics Skills</li>
                <li>Embedded Systems Skills</li>
                <li>Project Development</li>
                <li>Industry-Oriented Knowledge</li>
              </ul>
            </div>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="ece-cta">
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

export default ECEDepartment;