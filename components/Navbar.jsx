'use client';
import React, { useState, useEffect, useRef } from 'react';
import ApplyModal from './ApplyModal';
import { ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [stage, setStage] = useState('TREQO');
  const [modalOpen, setModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = currentScrollY / (docHeight || 1);

      // Scrolled styling (glassmorphism/shadow)
      setScrolled(currentScrollY > 50);

      // Smart hide on scroll down, show on scroll up
      if (currentScrollY > 80) {
        if (currentScrollY > lastScrollY.current + 5) {
          // Scrolling down -> hide navbar
          setVisible(false);
        } else if (currentScrollY < lastScrollY.current - 5) {
          // Scrolling up -> reveal navbar
          setVisible(true);
        }
      } else {
        // At the very top -> always show navbar
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <ApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Main sticky navigation in #E5DFD0 & Purple theme with Smart Auto-Hide */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: '16px 80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled ? 'rgba(229, 223, 208, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '2px solid #0A0A0A' : '1px solid transparent',
          boxShadow: scrolled ? '0 8px 24px rgba(0, 0, 0, 0.05)' : 'none',
          transform: visible ? 'translateY(0)' : 'translateY(-110%)',
          transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s, box-shadow 0.3s, border-bottom 0.3s',
        }}
      >
        {/* Brand Logo: Clean Constant TREQO */}
        <a
          href="#top"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            textDecoration: 'none',
            color: '#0A0A0A',
          }}
        >
          <span
            style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontWeight: 900,
              fontSize: '1.75rem',
              letterSpacing: '-0.03em',
              color: '#6D28FF',
            }}
          >
            TREQO
          </span>
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#6D28FF',
              display: 'inline-block',
            }}
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="desktop-nav-wrap">
          <a href="#why" className="nav-link-item">Why</a>
          <a href="#choose-system" className="nav-link-item">Tracks</a>
          <a href="#real-work" className="nav-link-item">Projects</a>
          <a href="#interactive-tracks" className="nav-link-item">Curriculum</a>
          <a href="#mentors" className="nav-link-item">Mentors</a>

          <button
            onClick={() => setModalOpen(true)}
            style={{
              background: '#6D28FF',
              color: '#ffffff',
              border: '2px solid #0A0A0A',
              borderRadius: '999px',
              padding: '10px 22px',
              fontWeight: 900,
              fontSize: '12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              boxShadow: '3px 3px 0px #0A0A0A',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translate(-2px, -2px)';
              e.currentTarget.style.boxShadow = '5px 5px 0px #0A0A0A';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = '3px 3px 0px #0A0A0A';
            }}
          >
            <span>Apply Now</span>
            <ArrowRight size={14} />
          </button>
        </nav>
      </header>

      <style jsx>{`
        .nav-link-item {
          font-family: var(--ff-mono, 'JetBrains Mono', monospace);
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0A0A0A;
          text-decoration: none;
          transition: color 0.2s;
          position: relative;
        }

        .nav-link-item:hover {
          color: #6D28FF;
        }

        @media (max-width: 860px) {
          .desktop-nav-wrap a {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
