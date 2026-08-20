import React from "react";
import { ArrowRight, CalendarDays } from "lucide-react";
import "./Events.css";

const events = [
  {
    image: "/events/sports.jpg",
    date: "15 August 2026",
    title: "Sports Activities",
    category: "Sports",
    description:
      "Encouraging teamwork, fitness and sportsmanship through student competitions and activities.",
  },
  {
    image: "/events/cultural.jpg",
    date: "20 August 2026",
    title: "Cultural Programs",
    category: "Cultural",
    description:
      "A platform for students to showcase creativity, talent and cultural traditions.",
  },
  {
    image: "/events/fest.jpg",
    date: "05 September 2026",
    title: "College Fest",
    category: "Fest",
    description:
      "An exciting celebration bringing students together through entertainment and activities.",
  },
  {
    image: "/events/technical.jpg",
    date: "20 September 2026",
    title: "Technical Workshop",
    category: "Technical",
    description:
      "Technical workshops and hands-on learning activities to develop practical skills.",
  },
];

function Events() {
  return (
    <main className="events-page">

      {/* HERO */}
      <section className="events-hero">
        <img
          src="/events/events-banner.jpg"
          alt="Government Polytechnic College Events"
          className="events-hero-image"
        />

        <div className="events-hero-overlay"></div>

        <div className="events-container events-hero-content">
          <span>COLLEGE ACTIVITIES</span>

          <h1>
            Programs & <strong>Events</strong>
          </h1>

          <p>
            Discover the academic, technical, cultural, sports and
            student-development activities happening at Government
            Polytechnic College, Masab Tank.
          </p>
        </div>
      </section>

      {/* EVENTS */}
      <section className="events-section">
        <div className="events-container">

          <div className="events-heading">
            <span>STUDENT LIFE</span>

            <h2>Programs & Events</h2>

            <p>
              Explore the activities and events that make college life
              engaging, creative and memorable.
            </p>
          </div>

          <div className="events-grid">

            {events.map((event, index) => (
              <article className="event-card" key={index}>

                <img
                  src={event.image}
                  alt={event.title}
                  className="event-image"
                />

                <div className="event-overlay"></div>

                <div className="event-card-content">

                  <div className="event-date">
                    <CalendarDays size={16} />
                    <span>{event.date}</span>
                  </div>

                  <h3>{event.title}</h3>

                  <span className="event-category">
                    {event.category}
                  </span>

                  <p>{event.description}</p>

                  <button className="event-button">
                    View Details
                    <ArrowRight size={16} />
                  </button>

                </div>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="event-categories">
        <div className="events-container">

          <div className="events-heading">
            <span>ACTIVITIES</span>
            <h2>Something for Everyone</h2>
          </div>

          <div className="category-grid">

            <div className="category-item">
              <span>01</span>
              <h3>Sports</h3>
              <p>
                Sports competitions and activities encouraging
                fitness, teamwork and discipline.
              </p>
            </div>

            <div className="category-item">
              <span>02</span>
              <h3>Culturals</h3>
              <p>
                Cultural celebrations and programs showcasing
                student creativity and talent.
              </p>
            </div>

            <div className="category-item">
              <span>03</span>
              <h3>Fests</h3>
              <p>
                College celebrations and student gatherings
                filled with learning and entertainment.
              </p>
            </div>

            <div className="category-item">
              <span>04</span>
              <h3>Technical Programs</h3>
              <p>
                Workshops, seminars and technical activities
                focused on practical skills.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="events-cta">
        <div className="events-container">

          <div>
            <span>GOVERNMENT POLYTECHNIC COLLEGE</span>

            <h2>
              Learn, participate and grow beyond the classroom.
            </h2>
          </div>

          <a href="/contact">
            Contact College
            <ArrowRight size={17} />
          </a>

        </div>
      </section>

    </main>
  );
}

export default Events;