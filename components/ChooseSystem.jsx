'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, ArrowUpRight, GraduationCap, Building2, Clock, Hourglass, Sparkles, Play } from 'lucide-react';
import { DoodleBadge } from './Doodles';
import ApplyModal from './ApplyModal';

export default function ChooseSystem() {
  const [currentPage, setCurrentPage] = useState(0); // 0 = first 2 cards, 1 = next 2 cards
  const [modalOpen, setModalOpen] = useState(false);
  const [direction, setDirection] = useState(1); // 1 = right, -1 = left

  const courses = [
    {
      id: 3,
      mode: 'OFFLINE',
      title: 'Treqo - The Founder Semester',
      description: 'Learn Marketing The Way Founders, Strategists & Growth Leaders Do. Practitioner-led program built on live revenue execution.',
      format: 'On Campus & Hybrid',
      eligibility: '2-1 Semester Students / Graduates',
      duration: '9 Months',
      deadline: 'Applications Currently Open',
      ctaText: 'Explore Programme',
      isComingSoon: false,
      tagBg: '#6D28FF',
      tagColor: '#ffffff',
      imgSrc: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 2,
      mode: 'New Age Digital Marketing',
      title: '100% Online Digital Marketing',
      description: 'Live interactive cohorts with LMS access. Curriculum designed with active growth founders and CMOs for working pros & students.',
      format: '100% Online (Live & LMS)',
      eligibility: 'Working Professionals & Students',
      duration: '5 Months (100% Placement Support)',
      deadline: 'Early Round Applications Open',
      ctaText: 'Explore Programme',
      isComingSoon: false,
      tagBg: '#0A0A0A',
      tagColor: '#ffffff',
      imgSrc: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop'
    },
    {
      id: 1,
      mode: 'OFFLINE',
      title: 'New Age Digital Marketing — Campus Edition',
      description: 'Learn Marketing The Way Founders, Strategists & Growth Leaders Do. Practitioner-led program built on live revenue execution.',
      format: 'On Campus (Offline)',
      eligibility: 'Students & Graduates',
      duration: '4-5 Months (30+ Projects)',
      deadline: 'Early Round Applications Open',
      ctaText: 'Explore Programme',
      isComingSoon: false,
      tagBg: '#6D28FF',
      tagColor: '#ffffff',
      imgSrc: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop'
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
      isComingSoon: true,
      tagBg: '#0A0A0A',
      tagColor: '#6D28FF',
      imgSrc: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
    }
  ];

  const totalPages = Math.ceil(courses.length / 2); // 2 pages total (2 blocks per view)

  const handleNext = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // 2 courses for current page
  const visibleCourses = courses.slice(currentPage * 2, currentPage * 2 + 2);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.35,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.25,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <>
      <ApplyModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />

      <section
        id="choose-system"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#E5DFD0',
          color: '#0A0A0A',
          padding: '70px 0 60px',
          position: 'relative',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ maxWidth: '1540px', margin: '0 auto', padding: '0 80px', width: '100%' }}>

          {/* ── HEADER ROW WITH CONTROLS ── */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '44px',
              flexWrap: 'wrap',
              gap: '20px',
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '12px' }}>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: '#ffffff',
                    border: '1.5px solid #6D28FF',
                    color: '#6D28FF',
                    padding: '6px 16px',
                    borderRadius: '999px',
                    fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                    fontSize: '11px',
                    fontWeight: 800,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    boxShadow: '2px 2px 0px rgba(109, 40, 255, 0.25)',
                  }}
                >
                  <Sparkles size={13} color="#6D28FF" />
                  <span>CURATED TRACKS</span>
                </div>
                <DoodleBadge text={`TRACKS ${currentPage * 2 + 1}-${currentPage * 2 + 2} OF ${courses.length}`} rotate={-1} highlight={true} />
              </div>

              <h2
                style={{
                  fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                  fontSize: 'clamp(1.85rem, 3.4vw, 2.75rem)',
                  fontWeight: 900,
                  letterSpacing: '-0.03em',
                  margin: 0,
                  textTransform: 'uppercase',
                  color: '#0A0A0A',
                  lineHeight: 1.1,
                }}
              >
                Choose Your{' '}
                <span
                  style={{
                    background: '#6D28FF',
                    color: '#ffffff',
                    padding: '2px 14px',
                    display: 'inline-block',
                    border: '3px solid #0A0A0A',
                    boxShadow: '4px 4px 0px #0A0A0A',
                    transform: 'rotate(-1deg)',
                  }}
                >
                  Learning System
                </span>
              </h2>
            </div>

            {/* Navigation Arrows with Page Indicators */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span
                style={{
                  fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                  fontSize: '12px',
                  fontWeight: 800,
                  color: '#6D28FF',
                  marginRight: '6px',
                }}
              >
                0{currentPage + 1} / 0{totalPages}
              </span>

              <motion.button
                type="button"
                whileTap={{ scale: 0.9 }}
                onClick={handlePrev}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  border: '2px solid #0A0A0A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '3px 3px 0px #0A0A0A',
                  transition: 'all 0.2s',
                }}
                aria-label="Previous 2 courses"
              >
                <ArrowLeft size={18} color="#0A0A0A" />
              </motion.button>

              <motion.button
                type="button"
                whileTap={{ scale: 0.9 }}
                onClick={handleNext}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  background: '#6D28FF',
                  border: '2px solid #0A0A0A',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  boxShadow: '3px 3px 0px #0A0A0A',
                  transition: 'all 0.2s',
                }}
                aria-label="Next 2 courses"
              >
                <ArrowRight size={18} color="#ffffff" />
              </motion.button>
            </div>
          </div>

          {/* ── EXACT 2 BLOCKS VIEW (GRID OF 2) WITH SMOOTH SLIDE ANIMATION ── */}
          <div style={{ minHeight: '620px', position: 'relative' }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentPage}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '28px',
                  width: '100%',
                }}
                className="choose-two-blocks-grid"
              >
                {visibleCourses.map((course) => (
                  <div
                    key={course.id}
                    style={{
                      background: '#ffffff',
                      border: '3px solid #0A0A0A',
                      borderRadius: '26px',
                      padding: '30px 28px',
                      boxShadow: '10px 10px 0px #0A0A0A',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxSizing: 'border-box',
                      position: 'relative',
                    }}
                  >
                    <div>
                      {/* Image Media Space */}
                      <div
                        style={{
                          width: '100%',
                          height: '210px',
                          borderRadius: '18px',
                          overflow: 'hidden',
                          position: 'relative',
                          border: '2px solid #0A0A0A',
                          marginBottom: '22px',
                          background: '#0A0A0A',
                        }}
                      >
                        <img
                          src={course.imgSrc}
                          alt={course.title}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            filter: 'contrast(1.05)',
                          }}
                        />

                        {/* Gradient Legibility Overlay */}
                        <div
                          style={{
                            position: 'absolute',
                            inset: 0,
                            background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 40%, rgba(0,0,0,0.65) 100%)',
                          }}
                        />

                        {/* Mode Badge */}
                        <span
                          style={{
                            position: 'absolute',
                            top: '14px',
                            left: '14px',
                            background: course.tagBg,
                            color: course.tagColor,
                            border: '1.5px solid #0A0A0A',
                            borderRadius: '6px',
                            padding: '5px 12px',
                            fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                            fontSize: '10.5px',
                            fontWeight: 900,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            boxShadow: '2px 2px 0px #0A0A0A',
                          }}
                        >
                          {course.mode}
                        </span>

                        {/* Play preview button */}
                        <button
                          type="button"
                          onClick={() => setModalOpen(true)}
                          style={{
                            position: 'absolute',
                            bottom: '14px',
                            right: '14px',
                            width: '38px',
                            height: '38px',
                            borderRadius: '50%',
                            background: '#6D28FF',
                            color: '#ffffff',
                            border: '2px solid #ffffff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                            cursor: 'pointer',
                          }}
                          aria-label="Play course preview"
                        >
                          <Play size={15} fill="#ffffff" />
                        </button>
                      </div>

                      {/* Title */}
                      <h3
                        style={{
                          fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                          fontSize: '22px',
                          fontWeight: 900,
                          color: '#0A0A0A',
                          lineHeight: 1.25,
                          margin: '0 0 10px',
                          letterSpacing: '-0.02em',
                          minHeight: '54px',
                        }}
                      >
                        {course.title}
                      </h3>

                      {/* Description */}
                      <p
                        style={{
                          fontSize: '13.5px',
                          color: '#555555',
                          lineHeight: 1.6,
                          margin: '0 0 24px',
                          fontWeight: 500,
                          minHeight: '64px',
                        }}
                      >
                        {course.description}
                      </p>

                      {/* 2x2 Specifications Grid */}
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(2, 1fr)',
                          gap: '12px',
                          marginBottom: '26px',
                          paddingTop: '16px',
                          borderTop: '1.5px solid rgba(10, 10, 10, 0.1)',
                        }}
                      >
                        {/* Format */}
                        <div
                          style={{
                            background: '#E5DFD0',
                            border: '1.5px solid #0A0A0A',
                            borderRadius: '12px',
                            padding: '10px 12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                          }}
                        >
                          <div
                            style={{
                              width: '30px',
                              height: '30px',
                              borderRadius: '7px',
                              background: '#6D28FF',
                              color: '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <GraduationCap size={15} />
                          </div>
                          <div style={{ overflow: 'hidden' }}>
                            <span style={{ fontSize: '9px', fontWeight: 800, color: '#666', textTransform: 'uppercase', display: 'block', fontFamily: "var(--ff-mono, monospace)" }}>
                              Format
                            </span>
                            <strong style={{ fontSize: '11.5px', fontWeight: 800, color: '#0A0A0A', display: 'block', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                              {course.format}
                            </strong>
                          </div>
                        </div>

                        {/* Eligibility */}
                        <div
                          style={{
                            background: '#E5DFD0',
                            border: '1.5px solid #0A0A0A',
                            borderRadius: '12px',
                            padding: '10px 12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                          }}
                        >
                          <div
                            style={{
                              width: '30px',
                              height: '30px',
                              borderRadius: '7px',
                              background: '#0A0A0A',
                              color: '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <Building2 size={14} />
                          </div>
                          <div style={{ overflow: 'hidden' }}>
                            <span style={{ fontSize: '9px', fontWeight: 800, color: '#666', textTransform: 'uppercase', display: 'block', fontFamily: "var(--ff-mono, monospace)" }}>
                              Eligibility
                            </span>
                            <strong style={{ fontSize: '11.5px', fontWeight: 800, color: '#0A0A0A', display: 'block', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                              {course.eligibility}
                            </strong>
                          </div>
                        </div>

                        {/* Duration */}
                        <div
                          style={{
                            background: '#E5DFD0',
                            border: '1.5px solid #0A0A0A',
                            borderRadius: '12px',
                            padding: '10px 12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                          }}
                        >
                          <div
                            style={{
                              width: '30px',
                              height: '30px',
                              borderRadius: '7px',
                              background: '#6D28FF',
                              color: '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <Clock size={14} />
                          </div>
                          <div style={{ overflow: 'hidden' }}>
                            <span style={{ fontSize: '9px', fontWeight: 800, color: '#666', textTransform: 'uppercase', display: 'block', fontFamily: "var(--ff-mono, monospace)" }}>
                              Duration
                            </span>
                            <strong style={{ fontSize: '11.5px', fontWeight: 800, color: '#0A0A0A', display: 'block', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                              {course.duration}
                            </strong>
                          </div>
                        </div>

                        {/* Deadline */}
                        <div
                          style={{
                            background: '#E5DFD0',
                            border: '1.5px solid #0A0A0A',
                            borderRadius: '12px',
                            padding: '10px 12px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                          }}
                        >
                          <div
                            style={{
                              width: '30px',
                              height: '30px',
                              borderRadius: '7px',
                              background: '#0A0A0A',
                              color: '#ffffff',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            <Hourglass size={14} />
                          </div>
                          <div style={{ overflow: 'hidden' }}>
                            <span style={{ fontSize: '9px', fontWeight: 800, color: '#666', textTransform: 'uppercase', display: 'block', fontFamily: "var(--ff-mono, monospace)" }}>
                              Deadline
                            </span>
                            <strong style={{ fontSize: '11.5px', fontWeight: 800, color: '#0A0A0A', display: 'block', whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}>
                              {course.deadline}
                            </strong>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Black Explore CTA Button */}
                    <button
                      type="button"
                      onClick={() => setModalOpen(true)}
                      style={{
                        width: '100%',
                        background: '#0A0A0A',
                        color: '#ffffff',
                        border: '2px solid #0A0A0A',
                        borderRadius: '12px',
                        padding: '15px',
                        fontWeight: 900,
                        fontSize: '13px',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        boxShadow: '4px 4px 0px #0A0A0A',
                        transition: 'all 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translate(-2px, -2px)';
                        e.currentTarget.style.boxShadow = '6px 6px 0px #6D28FF';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = '4px 4px 0px #0A0A0A';
                      }}
                    >
                      <span>{course.ctaText}</span>
                      <ArrowUpRight size={16} />
                    </button>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

      <style jsx>{`
        @media (max-width: 860px) {
          .choose-two-blocks-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}
