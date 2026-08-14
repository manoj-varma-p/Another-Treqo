'use client';

export default function Navbar() {
  return (
    <>
      {/* Main navigation */}
      <header className="nav" id="siteNav">
        <a href="#top" className="nav-logo">TREQO</a>
        <div className="nav-links" id="navLinks">
          <a href="#why">Why TREQO</a>
          <a href="#system">Learning System</a>
          <a href="#training">Training Model</a>
          <a href="#tutors">Tutors</a>
          <a href="#faq">FAQ</a>
          <a href="#demo" className="apply-btn">Book a Demo →</a>
        </div>
        <button className="nav-burger" id="navBurger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    </>
  );
}
