import React from "react";
import {
  Award,
  BookOpen,
  Building2,
  CheckCircle2,
  GraduationCap,
  Target,
  Users,
} from "lucide-react";

import "./About.css";

function About() {
  return (
    <main className="about-page">

      {/* =========================================
          PAGE HERO
          ========================================= */}

      <section className="about-hero">

        <div className="about-hero-overlay"></div>

        <div className="about-container about-hero-content">

          <span className="about-eyebrow">
            ABOUT OUR INSTITUTION
          </span>

          <h1>
            Government Polytechnic
            <span>College, Masab Tank</span>
          </h1>

          <p>
            A government technical education institution committed
            to quality education, practical skills and student
            development.
          </p>

        </div>

      </section>


      {/* =========================================
          COLLEGE OVERVIEW
          ========================================= */}

      <section className="about-overview">

        <div className="about-container">

          <div className="about-overview-grid">

            <div className="about-overview-content">

              <span className="about-section-label">
                COLLEGE OVERVIEW
              </span>

              <h2>
                Empowering Students Through
                <span> Technical Education</span>
              </h2>

              <div className="about-gold-line"></div>

              <p>
                Government Polytechnic College, Masab Tank is
                dedicated to providing quality technical education
                and developing skilled professionals for the
                requirements of industry and society.
              </p>

              <p>
                The institution provides students with opportunities
                to develop technical knowledge, practical skills,
                professional values and confidence through academic
                learning and practical exposure.
              </p>

              <p>
                With dedicated faculty, technical laboratories and
                student-focused learning, the college aims to create
                an environment that supports academic and personal
                growth.
              </p>

            </div>


            <div className="about-overview-card">

              <div className="overview-card-icon">
                <GraduationCap size={32} />
              </div>

              <span>
                GOVERNMENT POLYTECHNIC
              </span>

              <h3>
                Quality Technical Education
              </h3>

              <p>
                Building technical knowledge, practical skills and
                professional abilities for the future.
              </p>

              <div className="overview-card-line"></div>

              <div className="overview-card-items">

                <div>
                  <CheckCircle2 size={18} />
                  <span>
                    Practical Learning
                  </span>
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  <span>
                    Skilled Faculty
                  </span>
                </div>

                <div>
                  <CheckCircle2 size={18} />
                  <span>
                    Student Development
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          VISION & MISSION
          ========================================= */}

      <section className="about-vision-mission">

        <div className="about-container">

          <div className="about-section-heading">

            <span className="about-section-label">
              OUR DIRECTION
            </span>

            <h2>
              Vision & Mission
            </h2>

            <p>
              Our educational approach focuses on technical
              excellence, practical learning and responsible
              student development.
            </p>

          </div>


          <div className="vision-mission-grid">

            {/* VISION */}

            <div className="vision-card">

              <div className="vm-icon">
                <Target size={28} />
              </div>

              <span className="vm-label">
                OUR VISION
              </span>

              <h3>
                Excellence Through Technical Education
              </h3>

              <p>
                To provide quality technical education and develop
                competent, skilled and responsible students who can
                contribute effectively to industry and society.
              </p>

            </div>


            {/* MISSION */}

            <div className="mission-card">

              <div className="vm-icon">
                <Award size={28} />
              </div>

              <span className="vm-label">
                OUR MISSION
              </span>

              <h3>
                Knowledge, Skills & Character
              </h3>

              <p>
                To provide an effective learning environment that
                combines theoretical knowledge with practical
                training, innovation, discipline and professional
                development.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          OBJECTIVES
          ========================================= */}

      <section className="about-objectives">

        <div className="about-container">

          <div className="about-section-heading centered">

            <span className="about-section-label">
              OUR OBJECTIVES
            </span>

            <h2>
              What We Focus On
            </h2>

            <p>
              The college focuses on developing students with
              technical competence and professional confidence.
            </p>

          </div>


          <div className="objectives-grid">

            <div className="objective-card">

              <div className="objective-icon">
                <BookOpen size={24} />
              </div>

              <h3>
                Academic Excellence
              </h3>

              <p>
                Encourage strong academic foundations and
                continuous learning.
              </p>

            </div>


            <div className="objective-card">

              <div className="objective-icon">
                <Building2 size={24} />
              </div>

              <h3>
                Practical Skills
              </h3>

              <p>
                Provide practical exposure through laboratories,
                projects and technical activities.
              </p>

            </div>


            <div className="objective-card">

              <div className="objective-icon">
                <Users size={24} />
              </div>

              <h3>
                Student Development
              </h3>

              <p>
                Develop communication, teamwork, discipline and
                professional abilities.
              </p>

            </div>


            <div className="objective-card">

              <div className="objective-icon">
                <Award size={24} />
              </div>

              <h3>
                Industry Readiness
              </h3>

              <p>
                Prepare students with technical and professional
                skills required for future opportunities.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          WHY CHOOSE US
          ========================================= */}

      <section className="about-why">

        <div className="about-container">

          <div className="about-why-box">

            <div className="about-why-content">

              <span className="about-section-label">
                WHY CHOOSE US
              </span>

              <h2>
                Building Skills for
                <span> Tomorrow</span>
              </h2>

              <p>
                We aim to provide students with a strong combination
                of technical education, practical learning and
                professional development.
              </p>

            </div>


            <div className="why-list">

              <div className="why-item">
                <CheckCircle2 size={20} />
                <span>
                  Student-focused technical education
                </span>
              </div>

              <div className="why-item">
                <CheckCircle2 size={20} />
                <span>
                  Practical and laboratory-based learning
                </span>
              </div>

              <div className="why-item">
                <CheckCircle2 size={20} />
                <span>
                  Experienced teaching and support staff
                </span>
              </div>

              <div className="why-item">
                <CheckCircle2 size={20} />
                <span>
                  Focus on professional and personal development
                </span>
              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}

export default About;