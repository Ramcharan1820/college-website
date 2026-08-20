import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Map,
  Car,
  Train,
  Plane,
  Landmark,
  ExternalLink,
} from "lucide-react";

import "./Contact.css";

export default function Contact() {
  return (
    <main className="contact-page">

      {/* ================================
          HERO
      ================================= */}

      <section className="contact-hero">
        <div className="contact-hero-content">

          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h1>Contact Us</h1>

          <p>
            Have a question or need more information?
            Get in touch with Government Polytechnic College,
            Masab Tank, Hyderabad.
          </p>

        </div>
      </section>


      {/* ================================
          CONTACT INFORMATION
      ================================= */}

      <section className="contact-section">

        <div className="contact-container">

          <div className="contact-heading">

            <span>CONTACT INFORMATION</span>

            <h2>We Are Here to Help</h2>

            <p>
              Reach out to us for academic information,
              departments, student services and other
              college-related enquiries.
            </p>

          </div>


          <div className="contact-grid">

            {/* ADDRESS */}
            <div className="contact-card">

              <div className="contact-card-icon">
                <MapPin size={23} />
              </div>

              <h3>College Address</h3>

              <p>
                Government Polytechnic College,
                Masab Tank, Hyderabad,
                Telangana, India.
              </p>

            </div>


            {/* PHONE */}
            <div className="contact-card">

              <div className="contact-card-icon">
                <Phone size={23} />
              </div>

              <h3>Phone</h3>

              <p>
                Contact the college office during
                working hours for enquiries.
              </p>

            </div>


            {/* EMAIL */}
            <div className="contact-card">

              <div className="contact-card-icon">
                <Mail size={23} />
              </div>

              <h3>Email</h3>

              <p>
                Contact the college through the
                official communication channels.
              </p>

            </div>


            {/* WORKING HOURS */}
            <div className="contact-card">

              <div className="contact-card-icon">
                <Clock size={23} />
              </div>

              <h3>Working Hours</h3>

              <p>
                Monday to Friday
                <br />
                During regular college working hours.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================================
          LOCATION
      ================================= */}

      <section className="contact-location">

        <div className="contact-container">

          <div className="location-header">

            <div>
              <span>
                <Map size={17} />
                LOCATION ON MAP
              </span>

              <h2>Government Polytechnic College, Masab Tank</h2>

              <p>
                Masab Tank, Hyderabad, Telangana, India.
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Government+Polytechnic+College+Masab+Tank+Hyderabad"
              target="_blank"
              rel="noopener noreferrer"
              className="map-button"
            >
              <ExternalLink size={16} />
              Open in Google Maps
            </a>

          </div>


          <div className="location-layout">

            {/* MAP */}
            <div className="map-wrapper">

              <iframe
                title="Government Polytechnic College Masab Tank Location"
                src="https://www.google.com/maps?q=Government%20Polytechnic%20College%20Masab%20Tank%20Hyderabad&output=embed"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />

            </div>


            {/* HOW TO REACH */}
            <div className="reach-section">

              <h2>
                <MapPin size={22} />
                How to Reach Us
              </h2>


              {/* ROAD */}
              <div className="reach-card">

                <div className="reach-icon road">
                  <Car size={23} />
                </div>

                <div>
                  <h3>By Road</h3>

                  <p>
                    Government Polytechnic College, Masab Tank
                    is located in Hyderabad and is accessible
                    by local roads and public transportation.
                  </p>
                </div>

              </div>


              {/* TRAIN */}
              <div className="reach-card">

                <div className="reach-icon train">
                  <Train size={23} />
                </div>

                <div>
                  <h3>By Train</h3>

                  <p>
                    Hyderabad has several railway stations
                    with local transport facilities available
                    to reach Masab Tank.
                  </p>
                </div>

              </div>


              {/* AIR */}
              <div className="reach-card">

                <div className="reach-icon air">
                  <Plane size={23} />
                </div>

                <div>
                  <h3>By Air</h3>

                  <p>
                    Rajiv Gandhi International Airport is the
                    nearest major airport. Taxi and bus
                    services are available towards Hyderabad.
                  </p>
                </div>

              </div>


              {/* LANDMARK */}
              <div className="reach-card">

                <div className="reach-icon landmark">
                  <Landmark size={23} />
                </div>

                <div>
                  <h3>Nearby Landmark</h3>

                  <p>
                    Masab Tank is a well-known locality in
                    central Hyderabad and is easily accessible
                    from major areas of the city.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}