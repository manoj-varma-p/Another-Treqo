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
    quote: `"Don't build what you like. Build what people need."`,
    bullets: [
      { icon: Users, text: 'Talk to 50–100 real people before writing a single line of code' },
      { icon: Lightbulb, text: 'If you can\'t explain the problem in one sentence, you haven\'t understood it yet' },
      { icon: Target, text: 'Before TREQO was built, real graduates were asked \'what stopped you from getting hired?\' The answer became the curriculum' }
    ],
    highlight: 'Talk to 100 Real Users'
  },
  {
    num: '02',
    phase: 'PHASE 02',
    tag: 'THE "WHAT"',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=900&auto=format&fit=crop',
    icon: Cpu,
    title: 'MVP Development',
    quote: `"Launch ugly. Learn fast."`,
    bullets: [
      { icon: Cpu, text: 'Build the smallest version that solves the core problem.' },
      { icon: Zap, text: 'Swiggy started with just WhatsApp + a bike. No app.' },
      { icon: Rocket, text: 'Ship in days, not months.' }
    ],
    highlight: 'Ship In Days, Not Months'
  },
  {
    num: '03',
    phase: 'PHASE 03',
    tag: 'THE "HOW"',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=900&auto=format&fit=crop',
    icon: Compass,
    title: 'GTM Strategy & Positioning',
    quote: `"The best product doesn't win. The best-positioned one does."`,
    bullets: [
      { icon: Target, text: 'Pick one customer, one channel, one message' },
      { icon: Sparkles, text: 'Zepto didn\'t say \'groceries\' — they said \'10 minutes\'' },
      { icon: Compass, text: 'Know exactly where your customer spends time' }
    ],
    highlight: '1 Customer · 1 Channel · 1 Message'
  },
  {
    num: '04',
    phase: 'PHASE 04',
    tag: 'THE "WHEN"',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=900&auto=format&fit=crop',
    icon: Rocket,
    title: 'Launch Execution',
    quote: `"Done beats perfect. Every time."`,
    bullets: [
      { icon: Users, text: 'Get your first 10 customers manually — call, DM, show up' },
      { icon: Layers, text: 'OYO launched with just 1 hotel. Figure out the rest after' },
      { icon: Activity, text: 'Create a launch moment, not just a launch' }
    ],
    highlight: 'First 10 Customers Manually'
  },
  {
    num: '05',
    phase: 'PHASE 05',
    tag: 'NOW WHAT',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=900&auto=format&fit=crop',
    icon: BarChart3,
    title: 'Real Numbers',
    quote: `"Getting customers is hard. Keeping them is where money lives."`,
    bullets: [
      { icon: BarChart3, text: 'Track CAC, LTV, Churn — not likes and views' },
      { icon: ShieldCheck, text: 'Find what\'s working and double down. Build systems so the business runs without you.' }
    ],
    highlight: 'CAC · LTV · Retention Loops'
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
        padding: '65px clamp(20px, 4vw, 56px) 90px',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1240px', margin: '0 auto' }}>

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
                          margin: '0 0 12px',
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {card.title}
                      </h3>

                      {/* Quote Strip */}
                      <div
                        style={{
                          borderLeft: '3.5px solid #6D28FF',
                          background: '#FAF9F8',
                          borderTop: '1px solid rgba(10, 10, 10, 0.1)',
                          borderRight: '1px solid rgba(10, 10, 10, 0.1)',
                          borderBottom: '1px solid rgba(10, 10, 10, 0.1)',
                          borderRadius: '0 12px 12px 0',
                          padding: '10px 14px',
                          marginBottom: '16px',
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "'Fraunces', Georgia, serif",
                            fontStyle: 'italic',
                            fontSize: '13px',
                            color: '#6D28FF',
                            margin: 0,
                            lineHeight: 1.45,
                            fontWeight: 600,
                          }}
                        >
                          {card.quote}
                        </p>
                      </div>
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
                                background: '#6D28FF',
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
                            <span
                              style={{
                                fontSize: '13px',
                                color: '#222222',
                                lineHeight: 1.5,
                                fontWeight: 600,
                              }}
                            >
                              {b.text}
                            </span>
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
