'use client';

import { useRef } from 'react';

export default function ChooseSystem() {
  const trackRef = useRef(null);

  const courses = [
    {
      id: 3,
      mode: 'OFFLINE',
      title: 'New Age Digital Marketing & Enterpreneurship',
      description: 'Learn Marketing The Way Founders, Strategists & Growth Leaders Do. Practitioner-led program built on live revenue execution.',
      format: 'On Campus & Hybrid',
      eligibility: '2-1 Semister Students / Graduates',
      duration: '9 Months',
      deadline: 'Applications Currently Open',
      ctaText: 'Explore Programme',
      isComingSoon: false
    },
    {
      id: 2,
      mode: '100% ONLINE, Weekend batch',
      title: '100% Online Digital Marketing',
      description: 'Live interactive cohorts with LMS access. Curriculum designed with active growth founders and CMOs for working pros & students.',
      format: '100% Online (Live & LMS)',
      eligibility: 'Working Professionals, Students and Graduates',
      duration: '5 Months (100% Placement Support)',
      deadline: 'Early Round Applications Open',
      ctaText: 'Explore Programme',
      isComingSoon: false
    },
    {
      id: 1,
      mode: 'OFFLINE',
      title: 'New Age Digital Marketing',
      description: 'Learn Marketing The Way Founders, Strategists & Growth Leaders Do. Practitioner-led program built on live revenue execution.',
      format: 'On Campus (Offline)',
      eligibility: 'Students & Graduates',
      duration: '4-5 Months (30+ Projects)',
      deadline: 'Early Round Applications Open',
      ctaText: 'Explore Programme',
      isComingSoon: false
    },
    {
      id: 4,
      mode: 'COMING SOON',
      title: 'Digital Marketing and Sales',
      description: 'Advanced CAC-to-LTV Modeling, Funnel Optimization & Multi-Touch Attribution for High-Scale Brands and sales.',
      format: 'Coming Soon',
      eligibility: 'Students & Graduates',
      duration: '4 Months (Coming Soon)',
      deadline: 'Coming Soon 2026',
      ctaText: 'Join Waitlist',
      isComingSoon: true
    }
  ];

  const scrollLeft = () => {
    if (trackRef.current) {
      const card = trackRef.current.querySelector('.choose-course-card');
      const step = card ? card.offsetWidth + 24 : 500;
      trackRef.current.scrollBy({ left: -step, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      const card = trackRef.current.querySelector('.choose-course-card');
      const step = card ? card.offsetWidth + 24 : 500;
      trackRef.current.scrollBy({ left: step, behavior: 'smooth' });
    }
  };

  return (
    <section className="choose-system-sec" id="choose-system">
      <div className="wrap">
        
        {/* HEADER ROW WITH NAVIGATION ARROWS */}
        <div className="choose-system-header">
          <div>
            <span className="choose-eyebrow">CURATED TRACKS</span>
            <h2 className="choose-main-title">
              Choose Your <span className="purple-text">Learning System</span>
            </h2>
          </div>

          <div className="choose-nav-arrows">
            <button type="button" className="choose-arrow-btn" onClick={scrollLeft} aria-label="Previous courses">
              ‹
            </button>
            <button type="button" className="choose-arrow-btn active" onClick={scrollRight} aria-label="Next courses">
              ›
            </button>
          </div>
        </div>

        {/* 2 BLOCKS PER VIEW HORIZONTAL CAROUSEL TRACK */}
        <div className="choose-carousel-track" ref={trackRef}>
          {courses.map((course) => (
            <div key={course.id} className={`choose-course-card ${course.isComingSoon ? 'coming-soon' : ''}`}>
              
              {/* IMAGE FRAME SPACE (PLACEHOLDER CONTAINER) */}
              <div className="course-image-wrap">
                <div className="course-img-placeholder">
                  <div className="placeholder-icon">🎬</div>
                  <span className="placeholder-label">Course Preview Media</span>
                </div>
                <span className="course-mode-badge">{course.mode}</span>
                <button type="button" className="course-play-btn" aria-label="Play preview video">
                  ▶
                </button>
              </div>

              {/* TITLE & DESCRIPTION */}
              <h3 className="course-card-title">{course.title}</h3>
              <p className="course-card-desc">{course.description}</p>

              {/* 2x2 SPECIFICATIONS GRID */}
              <div className="course-specs-grid">
                
                {/* Format */}
                <div className="spec-cell">
                  <div className="spec-icon-box">🎓</div>
                  <div className="spec-info">
                    <span className="spec-name">Format</span>
                    <strong className="spec-detail">{course.format}</strong>
                  </div>
                </div>

                {/* Eligibility */}
                <div className="spec-cell">
                  <div className="spec-icon-box">🏢</div>
                  <div className="spec-info">
                    <span className="spec-name">Eligibility</span>
                    <strong className="spec-detail">{course.eligibility}</strong>
                  </div>
                </div>

                {/* Duration */}
                <div className="spec-cell">
                  <div className="spec-icon-box">⏱</div>
                  <div className="spec-info">
                    <span className="spec-name">Duration</span>
                    <strong className="spec-detail">{course.duration}</strong>
                  </div>
                </div>

                {/* Deadline */}
                <div className="spec-cell">
                  <div className="spec-icon-box">⏳</div>
                  <div className="spec-info">
                    <span className="spec-name">Deadline</span>
                    <strong className="spec-detail">{course.deadline}</strong>
                  </div>
                </div>

              </div>

              {/* CTA BUTTON */}
              <a href="#demo" className={`course-cta-btn ${course.isComingSoon ? 'waitlist' : ''}`}>
                {course.ctaText} <span className="btn-arrow">↗</span>
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
