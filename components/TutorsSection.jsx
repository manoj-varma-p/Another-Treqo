'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Star } from 'lucide-react';
import { DoodleBadge } from './Doodles';

const TUTORS_LIST = [
  {
    id: 1,
    name: 'Lokesh Dama',
    role: 'Product Management',
    company: 'Founder, TAC',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Valli Sayyad',
    role: 'Digital Marketing & Growth',
    company: 'Chief Growth Officer, TAC',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Durga Sai Vasagiri',
    role: 'AI in Marketing & Automation',
    company: 'Co-Founder, TAC',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'Ananya Sharma',
    role: 'Performance Marketing',
    company: 'Ex-Zomato Growth Lead',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 5,
    name: 'Rohan Deshmukh',
    role: 'Paid Acquisition & Media',
    company: 'Lead Marketer, Razorpay',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 6,
    name: 'Pooja Hegde',
    role: 'Brand & Creative Strategy',
    company: 'Creative Director, Swiggy',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: 7,
    name: 'Siddharth Varma',
    role: 'SEO & Organic Growth',
    company: 'Head of SEO, Zerodha',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop',
  },
];

export default function TutorsSection() {
  const [index, setIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % TUTORS_LIST.length);
  const prev = () => setIndex((prev) => (prev - 1 + TUTORS_LIST.length) % TUTORS_LIST.length);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isHovering) return;
    const interval = setInterval(next, 3800);
    return () => clearInterval(interval);
  }, [index, isHovering]);

  const getStyles = (i) => {
    const total = TUTORS_LIST.length;
    const diff = (i - index + total) % total;

    if (diff === 0) {
      return {
        x: 0,
        scale: 1,
        opacity: 1,
        filter: 'blur(0px)',
        zIndex: 10,
        rotateY: 0,
      };
    }

    if (diff === 1) {
      return {
        x: isMobile ? 140 : 420,
        scale: isMobile ? 0.75 : 0.84,
        opacity: 0.55,
        filter: 'blur(3px)',
        zIndex: 5,
        rotateY: -12,
      };
    }

    if (diff === total - 1) {
      return {
        x: isMobile ? -140 : -420,
        scale: isMobile ? 0.75 : 0.84,
        opacity: 0.55,
        filter: 'blur(3px)',
        zIndex: 5,
        rotateY: 12,
      };
    }

    return {
      x: diff > 1 ? (isMobile ? 220 : 560) : (isMobile ? -220 : -560),
      scale: 0.6,
      opacity: 0,
      zIndex: 0,
      filter: 'blur(10px)',
      rotateY: 0,
    };
  };

  return (
    <section
      id="tutors"
      data-stage="TUTORS"
      style={{
        width: '100%',
        padding: '70px 80px 80px',
        background: '#F3F0E7',
        color: '#0A0A0A',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1540px', margin: '0 auto', textAlign: 'center' }}>

        {/* ── HEADER ── */}
        <div style={{ marginBottom: '36px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '12px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: '#ffffff',
                border: '1.5px solid #6D28FF',
                color: '#6D28FF',
                padding: '5px 14px',
                borderRadius: '999px',
                fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                boxShadow: '2px 2px 0px rgba(109, 40, 255, 0.25)',
              }}
            >
              <Sparkles size={12} color="#6D28FF" />
              <span>MEET THE MASTERS</span>
            </div>
            <DoodleBadge text="OPERATORS IN THE GAME" rotate={-2} />
          </div>

          <h2
            style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              textTransform: 'uppercase',
              margin: '0 0 10px',
              color: '#0A0A0A',
            }}
          >
            THE TREQO{' '}
            <span
              style={{
                color: '#ffffff',
                background: '#6D28FF',
                padding: '2px 14px',
                display: 'inline-block',
                border: '2.5px solid #0A0A0A',
                boxShadow: '4px 4px 0px #0A0A0A',
                transform: 'rotate(-1deg)',
              }}
            >
              TUTORS
            </span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(15px, 1.2vw, 17px)',
              color: '#444444',
              maxWidth: '620px',
              margin: '0 auto',
              lineHeight: 1.5,
              fontWeight: 500,
            }}
          >
            Master modern marketing with direct mentorship from founders and growth leaders shaping the future of digital commerce.
          </p>
        </div>

        {/* ── 3D PERSPECTIVE CAROUSEL (UNBOXED) ── */}
        <div
          style={{
            position: 'relative',
            height: isMobile ? '300px' : '440px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1200px',
            margin: '20px auto 30px',
            maxWidth: '1200px',
          }}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Nav Buttons */}
          <div
            style={{
              position: 'absolute',
              inset: '0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0 10px',
              zIndex: 50,
              pointerEvents: 'none',
            }}
          >
            <button
              type="button"
              onClick={prev}
              style={{
                pointerEvents: 'auto',
                background: '#ffffff',
                color: '#0A0A0A',
                border: '2px solid #0A0A0A',
                padding: isMobile ? '10px' : '14px',
                borderRadius: '50%',
                boxShadow: '4px 4px 0px #0A0A0A',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#6D28FF';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = '#0A0A0A';
              }}
            >
              <ChevronLeft size={isMobile ? 18 : 24} />
            </button>

            <button
              type="button"
              onClick={next}
              style={{
                pointerEvents: 'auto',
                background: '#ffffff',
                color: '#0A0A0A',
                border: '2px solid #0A0A0A',
                padding: isMobile ? '10px' : '14px',
                borderRadius: '50%',
                boxShadow: '4px 4px 0px #0A0A0A',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#6D28FF';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = '#0A0A0A';
              }}
            >
              <ChevronRight size={isMobile ? 18 : 24} />
            </button>
          </div>

          {/* Carousel Cards */}
          <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {TUTORS_LIST.map((tutor, i) => {
              const style = getStyles(i);
              const isActive = (i - index + TUTORS_LIST.length) % TUTORS_LIST.length === 0;

              return (
                <motion.div
                  key={tutor.id}
                  animate={style}
                  transition={{
                    duration: 0.65,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    zIndex: style.zIndex,
                    transformStyle: 'preserve-3d',
                  }}
                  onClick={() => setIndex(i)}
                >
                  <motion.div
                    whileHover={isActive ? { y: -8 } : {}}
                    style={{
                      width: isMobile ? '280px' : '620px',
                      height: isMobile ? '200px' : '380px',
                      borderRadius: isMobile ? '20px' : '28px',
                      overflow: 'hidden',
                      border: '3px solid #0A0A0A',
                      boxShadow: isActive ? '10px 10px 0px #0A0A0A' : '4px 4px 0px #0A0A0A',
                      position: 'relative',
                      background: '#0A0A0A',
                    }}
                  >
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                      }}
                      draggable={false}
                    />

                    {/* Gradient Overlay for Card Text */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.3) 50%, transparent 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                        padding: isMobile ? '16px' : '26px',
                        textAlign: 'left',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                        <Star size={12} color="#6D28FF" fill="#6D28FF" />
                        <span
                          style={{
                            fontFamily: "var(--ff-mono, monospace)",
                            fontSize: '11px',
                            fontWeight: 900,
                            color: '#A78BFA',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                          }}
                        >
                          {tutor.role}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                          fontSize: isMobile ? '20px' : '28px',
                          fontWeight: 900,
                          color: '#ffffff',
                          margin: '0 0 4px',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {tutor.name}
                      </h3>

                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span
                          style={{
                            background: '#6D28FF',
                            color: '#ffffff',
                            fontFamily: "var(--ff-mono, monospace)",
                            fontSize: '10.5px',
                            fontWeight: 800,
                            padding: '3px 8px',
                            borderRadius: '5px',
                            border: '1px solid #0A0A0A',
                          }}
                        >
                          {tutor.company}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── INDICATORS ── */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '18px', gap: '8px' }}>
          {TUTORS_LIST.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              style={{
                height: '6px',
                width: i === index ? '48px' : '12px',
                background: i === index ? '#6D28FF' : '#0A0A0A',
                opacity: i === index ? 1 : 0.25,
                border: 'none',
                borderRadius: '999px',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                padding: 0,
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
