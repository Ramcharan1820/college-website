import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Attendance Page
import Attendance from "./pages/Attendance";

// Result Pages
import Result from "./pages/Result";
import MidResult from "./pages/MidResult";
import SemesterResult from "./pages/SemesterResult";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Departments from "./pages/Departments";
import Faculty from "./pages/Faculty";
import Placements from "./pages/Placements";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import StudentPortal from "./pages/StudentPortal";

// Department Pages
import CSE from "./pages/CSEDepartment";
import ECE from "./pages/ECEDepartment";
import EEE from "./pages/EEEDepartment";
import Mechanical from "./pages/MechanicalDepartment";
import Civil from "./pages/CivilDepartment";
import Automobile from "./pages/AutomobileDepartment";
import Pharmacy from "./pages/PharmacyDepartment";

// Layout Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="app">

      <Header />

      <ScrollToTop />

      <Routes>

        {/* =========================
            MAIN ROUTES
        ========================== */}

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/departments"
          element={<Departments />}
        />

        <Route
          path="/faculty"
          element={<Faculty />}
        />

        <Route
          path="/placements"
          element={<Placements />}
        />

        <Route
          path="/events"
          element={<Events />}
        />

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* =========================
            STUDENT PORTAL
        ========================== */}

        <Route
          path="/student-portal"
          element={<StudentPortal />}
        />

        {/* =========================
            ATTENDANCE
        ========================== */}

        <Route
          path="/student-portal/attendance"
          element={<Attendance />}
        />

        {/* =========================
            RESULT
        ========================== */}

        <Route
          path="/student-portal/result"
          element={<Result />}
        />

        {/* =========================
            MID RESULT
        ========================== */}

        <Route
          path="/student-portal/result/mid"
          element={<MidResult />}
        />

        {/* =========================
            SEMESTER RESULT
        ========================== */}

        <Route
          path="/student-portal/result/semester"
          element={<SemesterResult />}
        />

        {/* =========================
            DEPARTMENT ROUTES
        ========================== */}

        <Route
          path="/departments/cse"
          element={<CSE />}
        />

        <Route
          path="/departments/ece"
          element={<ECE />}
        />

        <Route
          path="/departments/eee"
          element={<EEE />}
        />

        <Route
          path="/departments/mechanical"
          element={<Mechanical />}
        />

        <Route
          path="/departments/civil"
          element={<Civil />}
        />

        <Route
          path="/departments/automobile"
          element={<Automobile />}
        />

        <Route
          path="/departments/pharmacy"
          element={<Pharmacy />}
        />

        {/* =========================
            FALLBACK ROUTE
            MUST BE LAST
        ========================== */}

        <Route
          path="*"
          element={<Home />}
        />

      </Routes>

      <Footer />

    </div>
  );
}