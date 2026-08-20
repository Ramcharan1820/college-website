import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">

      {/* Logo */}
      <Link to="/" className="college-brand" onClick={closeMenu}>
        <div className="logo-box">
          <img
            src="/college-logo.jpg"
            alt="Government Polytechnic College Logo"
          />
        </div>

        <div className="college-text">
          <h1>Government Polytechnic College</h1>
          <p>Masab Tank, Hyderabad</p>
        </div>
      </Link>

      {/* Hamburger */}
      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation */}
      <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/departments" onClick={closeMenu}>Departments</Link>
        <Link to="/faculty" onClick={closeMenu}>Faculty</Link>
        <Link to="/placements" onClick={closeMenu}>Placements</Link>
        <Link to="/events" onClick={closeMenu}>Events</Link>
        <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
        <Link to="/contact" onClick={closeMenu}>Contact</Link>

        <Link
          to="/student-portal"
          className="student-btn"
          onClick={closeMenu}
        >
          🎓 Student Portal
        </Link>
      </nav>

    </header>
  );
}