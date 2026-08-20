import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/college-campus.mp4" type="video/mp4" />
        </video>

        <div className="hero-overlay"></div>

        <div className="hero-content">
          <span>GOVERNMENT OF TELANGANA</span>

          <h1>
            Government Polytechnic
            <br />
            College, Masab Tank
          </h1>

          <p>
            Quality technical education, practical learning and
            opportunities for a better future.
          </p>

          <div className="hero-buttons">
            <a href="/about">About College →</a>
            <a href="/departments">Our Departments</a>
          </div>
        </div>
      </section>

      {/* PRINCIPAL */}
      <section className="principal">
        <div className="principal-photo">
          <img src="/principal.jpg" alt="Principal" />
        </div>

        <div className="principal-info">
          <span>COLLEGE LEADERSHIP</span>
          <h2>Principal's Message</h2>
          <p>
            Our college is committed to providing quality technical
            education, practical skills and a strong foundation for
            students to build successful careers.
          </p>
          <h3>Principal</h3>
          <p>Government Polytechnic College, Masab Tank</p>
        </div>
      </section>

      {/* QUICK INFORMATION */}
      <section className="quick-info">
        <div>
          <span>01</span>
          <h3>Academic Departments</h3>
          <p>Explore our technical departments and programmes.</p>
        </div>

        <div>
          <span>02</span>
          <h3>Placements</h3>
          <p>Training, recruiters and career opportunities.</p>
        </div>

        <div>
          <span>03</span>
          <h3>Events</h3>
          <p>College events, activities and programmes.</p>
        </div>

        <div>
          <span>04</span>
          <h3>Student Portal</h3>
          <p>Access attendance and academic results.</p>
        </div>
      </section>

    </main>
  );
}