export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">

        {/* Top row: brand + nav columns */}
        <div className="footer-top">

          {/* Brand column */}
          <div className="footer-brand-col">
            <div className="footer-logo">TREQO</div>
            <p className="footer-tagline">The Marketing School</p>
            <p className="footer-brand-desc">
              India's most rigorous marketing programme — built for thinkers who execute.
            </p>
            {/* Social icons row */}
            <div className="footer-socials">
              <a href="https://www.instagram.com/treqo_?igsh=cjk0aTczYnhrcXRt" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="footer-nav-cols">
            <div className="footer-nav-col">
              <p className="footer-nav-heading">Program</p>
              <nav className="footer-nav-list">
                <a href="#why">Why TREQO</a>
                <a href="#system">Learning System</a>
                <a href="#training">Training Model</a>
                <a href="#tutors">Our Tutors</a>
              </nav>
            </div>

            <div className="footer-nav-col">
              <p className="footer-nav-heading">Resources</p>
              <nav className="footer-nav-list">
                <a href="#faq">FAQ</a>
                <a href="#">Blog</a>
                <a href="#">Case Studies</a>
              </nav>
            </div>

            <div className="footer-nav-col">
              <p className="footer-nav-heading">Apply</p>
              <a href="#demo" className="footer-apply-btn">
                Book a Demo
                <span>›</span>
              </a>
              <p className="footer-apply-note">Batch 14 — Applications Open</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom row */}
        <div className="footer-bottom">
          <span className="footer-copy">© 2026 TREQO. All rights reserved.</span>
          <nav className="footer-legal">
            <a href="#">Contact</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </nav>
        </div>

      </div>
    </footer>
  );
}
