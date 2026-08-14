'use client';
import { useState } from 'react';
import LiquidEther from './LiquidEther';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(1); // Default to slide 2 as requested ("this image should go second")

  const slides = [
    {
      src: '/hero-showcase.png',
      alt: 'Why Choose TREQO? | Milestones 1-4',
      tag: 'THE TREQO ADVANTAGE',
      title: 'Four Milestones of TREQO Graduate',
      bg: '#E6D7F3'
    },
    {
      src: '/hero-showcase-2.png',
      alt: '01 Execution Proof | From idea to first paying customer',
      tag: 'MILESTONE 01',
      title: 'Execution Proof | Idea to Revenue',
      bg: '#0A0A0A'
    }
  ];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = slides[currentSlide];

  return (
    <>
      {/* HERO */}
      <section className="hero hero-split-style" id="demo" data-stage="TREQO">
        {/* Hero Background Image & Overlay */}
        <div className="hero-bg-img-wrap">
          <img src="/hero-bg.jpg" alt="" className="hero-bg-img" />
          <div className="hero-bg-overlay"></div>
        </div>

        <div className="wrap hero-inner hero-split-grid">
          {/* LEFT CONTENT */}
          <div className="hero-left-content">
            <div className="hero-eyebrow reveal">
              <span className="label">TREQO | THE MARKETING SCHOOL</span>
            </div>

            <h1 className="hero-title hero-title-split reveal reveal-d1">
              <span className="hollow-text">New Age</span>
              <span className="solid-text">Digital Marketing</span>
            </h1>

            <p className="hero-formula reveal reveal-d2">
              <span className="formula-bracket">(</span> <b>Strategy</b> × <b>Growth</b> × <b>Implementation</b> <span className="formula-bracket">)</span>
            </p>

            <p className="hero-positioning reveal reveal-d2">
              Learn Marketing The Way Founders, Strategists &amp; Growth Leaders Do.
            </p>

            <div className="hero-actions hero-actions-split reveal reveal-d2">
              <a href="#demo" className="hero-cta hero-cta-solid">
                Apply Now <span className="btn-arrow">›</span>
              </a>
              <button type="button" className="hero-cta hero-cta-outline play" id="playBtn">
                <span className="play-icon" aria-hidden="true"></span>
                Watch Film <span className="btn-arrow">›</span>
              </button>
            </div>
          </div>

          {/* RIGHT SHOWCASE BOX (Interactive Image Slider) */}
          <div className="hero-right-showcase reveal reveal-d2">
            <div className="showcase-card-frame">
              {/* Header/Tabs bar */}
              <div className="showcase-header">
                <div className="showcase-tabs">
                  <span
                    className={`tab ${currentSlide === 0 ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(0)}
                  >
                    ADVANTAGE 1-4
                  </span>
                  <span
                    className={`tab ${currentSlide === 1 ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(1)}
                  >
                    01 EXECUTION PROOF
                  </span>
                </div>
                <div className="showcase-logo-tag">TREQO</div>
              </div>

              {/* Image Container Area */}
              <div className="showcase-image-box" style={{ background: activeSlide.bg }}>
                <div className="showcase-placeholder">
                  <img
                    key={currentSlide}
                    src={activeSlide.src}
                    alt={activeSlide.alt}
                    className="showcase-img"
                  />
                  <div className="showcase-overlay">
                    <span className="showcase-tag">{activeSlide.tag}</span>
                    <h4>{activeSlide.title}</h4>
                  </div>
                </div>

                {/* Navigation arrows */}
                <button
                  type="button"
                  className="showcase-arrow left"
                  onClick={handlePrev}
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  type="button"
                  className="showcase-arrow right"
                  onClick={handleNext}
                  aria-label="Next image"
                >
                  ›
                </button>
              </div>

              {/* Bottom detail strip containing Stats */}
              <div className="showcase-footer">
                <div className="showcase-stats-row">
                  <div><strong>30+</strong><span>Live projects</span></div>
                  <div><strong>100%</strong><span>Placement support</span></div>
                  <div><strong>6 mo</strong><span>Flagship PGDM</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a href="#why" className="hero-scroll" aria-label="Scroll to next section">
          <span className="hero-scroll-label">Scroll</span>
          <span className="hero-scroll-line"></span>
        </a>
      </section>

      {/* VIDEO LIGHTBOX */}
      <div className="vbox" id="videoBox" role="dialog" aria-modal="true" aria-label="TREQO film">
        <button className="vbox-close" id="videoClose" aria-label="Close video">✕</button>
        <div className="vbox-frame">
          <div className="vbox-ratio" id="videoMount"></div>
        </div>
      </div>
    </>
  );
}
