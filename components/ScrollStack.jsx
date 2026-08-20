'use client';

import React from 'react';
import { 
  Users, 
  Lightbulb, 
  Target, 
  Cpu, 
  Zap, 
  Rocket, 
  Compass, 
  Sparkles, 
  Layers, 
  Activity, 
  BarChart3, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { DoodleBadge } from './Doodles';

const cards = [
  {
    num: '01',
    phase: 'PHASE 01',
    tag: 'THE "WHY"',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=900&auto=format&fit=crop',
    icon: Lightbulb,
    title: 'Idea Validation & Strategy',
    quote: `"Talk → Find → Validate"`,
    bullets: [
      {
        icon: Users,
        label: 'TALK',
        text: 'Talk to 20–50 real people before you build anything. Because “Bro, that\'s a great idea” isn\'t validation.'
      },
      {
        icon: Target,
        label: 'FIND',
        text: 'Find a problem people actually want solved. Not one you convinced yourself they have.'
      },
      {
        icon: Lightbulb,
        label: 'VALIDATE',
        text: 'Kill the bad idea early. It\'s cheaper than building it for six months.'
      }
    ],
    highlight: 'Talk → Find → Validate'
  },
  {
    num: '02',
    phase: 'PHASE 02',
    tag: 'THE "WHAT"',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop',
    icon: Cpu,
    title: 'MVP Development',
    quote: `"Build small. Learn fast."`,
    bullets: [
      {
        icon: Cpu,
        label: 'START SMALL',
        text: 'Build the simplest version that can prove the idea.'
      },
      {
        icon: Rocket,
        label: 'LAUNCH IT',
        text: 'Put it in front of real people.'
      },
      {
        icon: Zap,
        label: 'LEARN FAST',
        text: "See what works. Fix what doesn't."
      }
    ],
    highlight: "Perfect can wait. Real feedback can't."
  },
  {
    num: '03',
    phase: 'PHASE 03',
    tag: 'THE "HOW"',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=900&auto=format&fit=crop',
    icon: Compass,
    title: 'GTM Strategy & Positioning',
    quote: `"Great product. Wrong audience. Dead on arrival."`,
    bullets: [
      {
        icon: Target,
        label: 'ONE CUSTOMER',
        text: "Know exactly who you're trying to win."
      },
      {
        icon: Compass,
        label: 'ONE CHANNEL',
        text: 'Go where they already spend their time.'
      },
      {
        icon: Sparkles,
        label: 'ONE MESSAGE',
        text: 'Give them a reason to care.'
      }
    ],
    highlight: "Be the obvious choice for someone."
  },
  {
    num: '04',
    phase: 'PHASE 04',
    tag: 'THE "WHEN"',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=900&auto=format&fit=crop',
    icon: Rocket,
    title: 'Launch Execution',
    quote: `"Nobody cares that you launched. Give them a reason to."`,
    bullets: [
      {
        icon: Sparkles,
        label: 'CREATE THE MOMENT',
        text: "Don't just put it out there. Make people notice."
      },
      {
        icon: Zap,
        label: 'CREATE URGENCY',
        text: 'Give people a reason to act now, not later.'
      },
      {
        icon: Rocket,
        label: 'DRIVE ACTION',
        text: 'Make the next step obvious. Click. Buy. Sign up. Show up.'
      }
    ],
    highlight: "A launch isn't a post. It's an event."
  },
  {
    num: '05',
    phase: 'PHASE 05',
    tag: 'NOW WHAT',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop',
    icon: BarChart3,
    title: 'Real Numbers',
    quote: `"Likes feel good. Numbers tell the truth."`,
    bullets: [
      {
        icon: BarChart3,
        label: 'TRACK WHAT MATTERS',
        text: 'CAC. LTV. Churn. Know where the money is going.'
      },
      {
        icon: Activity,
        label: 'DOUBLE DOWN',
        text: "Find what's working. Do more of it."
      },
      {
        icon: ShieldCheck,
        label: 'BUILD SYSTEMS',
        text: "Turn what works into a repeatable process. Don't let the business depend on you."
      }
    ],
    highlight: "If you can't measure it, you can't improve it."
  }
];

export default function TrainingSection() {
  return (
    <section
      id="training"
      data-stage="TRAINING"
      style={{
        background: '#F3F0E7',
        color: '#0A0A0A',
        padding: '70px 80px 90px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1540px', margin: '0 auto' }}>

        {/* ── SECTION HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: '14px' }}>
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
              <span>OUR TRAINING MODEL</span>
            </div>
            <DoodleBadge text="5-STAGE SCROLL STACK" rotate={-1} highlight={true} />
          </div>

          <h2
            style={{
              fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
              fontSize: 'clamp(1.85rem, 3.4vw, 2.75rem)',
              fontWeight: 900,
              letterSpacing: '-0.03em',
              margin: '0 0 10px',
              textTransform: 'uppercase',
              color: '#0A0A0A',
              lineHeight: 1.1,
            }}
          >
            The Art of Building &amp;{' '}
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
              Marketing
            </span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(14.5px, 1.2vw, 16.5px)',
              color: '#555555',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.6,
              fontWeight: 500,
            }}
          >
            &ldquo;We don&apos;t teach you how to market. We put you in the market.&rdquo; <br />
            <strong>Real brand. Real audience. Real revenue</strong> — built and launched by you.
          </p>
        </div>

        {/* ── STICKY SCROLL STACK CONTAINER ── */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            position: 'relative',
          }}
        >
          {cards.map((card, idx) => {
            const IconComp = card.icon;
            // Progressive top offset for stacking effect
            const stickyTop = 100 + idx * 18;

            return (
              <div
                key={card.num}
                style={{
                  position: 'sticky',
                  top: `${stickyTop}px`,
                  zIndex: idx + 1,
                  marginBottom: idx === cards.length - 1 ? 0 : '16px',
                }}
              >
                <div
                  style={{
                    background: '#ffffff',
                    border: '3px solid #0A0A0A',
                    borderRadius: '26px',
                    boxShadow: '8px 8px 0px #0A0A0A',
                    padding: '36px clamp(20px, 3.5vw, 40px)',
                    display: 'grid',
                    gridTemplateColumns: '1.05fr 1.25fr',
                    gap: '32px',
                    alignItems: 'center',
                    transition: 'transform 0.2s ease',
                  }}
                  className="stack-card-inner-grid"
                >
                  {/* LEFT: VISUAL COVER BOX WITH IMAGE & OVERLAY */}
                  <div
                    style={{
                      background: '#0A0A0A',
                      color: '#FAF9F8',
                      border: '2.5px solid #0A0A0A',
                      borderRadius: '20px',
                      minHeight: '310px',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      padding: '28px 24px',
                      boxShadow: '5px 5px 0px #6D28FF',
                    }}
                  >
                    {/* Background Image */}
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.38,
                        transform: 'scale(1.05)',
                      }}
                    />

                    {/* Gradient Overlay for high text contrast */}
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to top, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.55) 50%, rgba(10, 10, 10, 0.3) 100%)',
                        pointerEvents: 'none',
                      }}
                    />

                    {/* Top Tag & Icon Badge */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
                      <span
                        style={{
                          fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                          fontSize: '11px',
                          fontWeight: 900,
                          color: '#ffffff',
                          background: '#6D28FF',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          letterSpacing: '0.08em',
                          boxShadow: '2px 2px 0px #0A0A0A',
                        }}
                      >
                        {card.phase} · {card.tag}
                      </span>

                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.15)',
                          backdropFilter: 'blur(10px)',
                          border: '1.5px solid rgba(255, 255, 255, 0.3)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <IconComp size={20} color="#ffffff" />
                      </div>
                    </div>

                    {/* Center Quote */}
                    <div style={{ position: 'relative', zIndex: 2, margin: '20px 0' }}>
                      <p
                        style={{
                          fontFamily: "'Fraunces', Georgia, serif",
                          fontStyle: 'italic',
                          fontSize: 'clamp(19px, 2vw, 23px)',
                          color: '#ffffff',
                          lineHeight: 1.35,
                          fontWeight: 600,
                          margin: 0,
                          textShadow: '0 2px 10px rgba(0,0,0,0.8)',
                        }}
                      >
                        {card.quote}
                      </p>
                    </div>

                    {/* Bottom Highlight */}
                    <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', gap: 6, fontSize: '11.5px', fontWeight: 800, color: '#FAF9F8' }}>
                      <CheckCircle2 size={15} color="#6D28FF" />
                      <span>{card.highlight}</span>
                    </div>
                  </div>

                  {/* RIGHT: PHASE DETAILS & BULLETS */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <span
                          style={{
                            background: '#F3F0E7',
                            border: '1.5px solid #0A0A0A',
                            color: '#0A0A0A',
                            fontFamily: "var(--ff-mono, monospace)",
                            fontSize: '11px',
                            fontWeight: 900,
                            padding: '4px 10px',
                            borderRadius: '6px',
                          }}
                        >
                          EXECUTION DRILL
                        </span>
                      </div>

                      <h3
                        style={{
                          fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                          fontSize: 'clamp(21px, 2.4vw, 28px)',
                          fontWeight: 900,
                          color: '#0A0A0A',
                          lineHeight: 1.2,
                          margin: '0 0 16px',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {card.title}
                      </h3>
                    </div>

                    {/* Bullets List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {card.bullets.map((b, bIdx) => {
                        const BulletIcon = b.icon;
                        return (
                          <div
                            key={bIdx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '12px',
                              background: '#F3F0E7',
                              border: '1.5px solid #0A0A0A',
                              borderRadius: '12px',
                              padding: '11px 14px',
                              boxShadow: '2px 2px 0px #0A0A0A',
                            }}
                          >
                            <div
                              style={{
                                width: '26px',
                                height: '26px',
                                borderRadius: '8px',
                                background: '#0A0A0A',
                                color: '#ffffff',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                marginTop: '1px',
                              }}
                            >
                              <BulletIcon size={14} color="#ffffff" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                              {b.label && (
                                <span
                                  style={{
                                    fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
                                    fontSize: '11px',
                                    fontWeight: 900,
                                    color: '#6D28FF',
                                    letterSpacing: '0.08em',
                                    textTransform: 'uppercase',
                                  }}
                                >
                                  {b.label}
                                </span>
                              )}
                              <span
                                style={{
                                  fontSize: '13px',
                                  color: '#222222',
                                  lineHeight: 1.45,
                                  fontWeight: 600,
                                }}
                              >
                                {b.text}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 860px) {
          .stack-card-inner-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}
