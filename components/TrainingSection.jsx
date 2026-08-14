'use client';

import { useState, useEffect, useRef } from 'react';
import { 
  Users, 
  Lightbulb, 
  Target, 
  Cpu, 
  Zap, 
  Rocket, 
  Compass, 
  Sparkles, 
  TrendingUp, 
  Layers, 
  Activity, 
  BarChart3, 
  ShieldCheck
} from 'lucide-react';

export default function TrainingSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const stackRef = useRef(null);

  const cards = [
    {
      num: '01',
      tag: 'PHASE 01 · THE "WHY"',
      image: '/phase1-target.jpg',
      icon: Lightbulb,
      title: 'Idea Validation & Strategy',
      quote: `"Don't build what you like. Build what people need."`,
      bullets: [
        { icon: Users, text: 'Talk to 50–100 real people before writing a single line of code' },
        { icon: Lightbulb, text: 'If you can\'t explain the problem in one sentence, you haven\'t understood it yet' },
        { icon: Target, text: 'Before TREQO was built, real graduates were asked \'what stopped you from getting hired?\' The answer became the curriculum' }
      ],
      gradient: 'linear-gradient(135deg, #1F0D59 0%, #4F26D2 50%, #0A0A0C 100%)'
    },
    {
      num: '02',
      tag: 'PHASE 02 · THE "WHAT"',
      icon: Cpu,
      title: 'MVP Development',
      quote: `"Launch ugly. Learn fast."`,
      bullets: [
        { icon: Cpu, text: 'Build the smallest version that solves the core problem.' },
        { icon: Zap, text: 'Swiggy started with just WhatsApp + a bike. No app.' },
        { icon: Rocket, text: 'Ship in days, not months.' }
      ],
      gradient: 'linear-gradient(135deg, #13082E 0%, #6D28FF 50%, #2D1180 100%)'
    },
    {
      num: '03',
      tag: 'PHASE 03 · THE "HOW"',
      icon: Compass,
      title: 'GTM Strategy & Positioning',
      quote: `"The best product doesn't win. The best-positioned one does."`,
      bullets: [
        { icon: Target, text: 'Pick one customer, one channel, one message' },
        { icon: Sparkles, text: 'Zepto didn\'t say \'groceries\' — they said \'10 minutes\'' },
        { icon: Compass, text: 'Know exactly where your customer spends time' }
      ],
      gradient: 'linear-gradient(135deg, #0E0728 0%, #4F26D2 60%, #1A0D4B 100%)'
    },
    {
      num: '04',
      tag: 'PHASE 04 · THE "WHEN"',
      icon: Rocket,
      title: 'Launch Execution',
      quote: `"Done beats perfect. Every time."`,
      bullets: [
        { icon: Users, text: 'Get your first 10 customers manually — call, DM, show up' },
        { icon: Layers, text: 'OYO launched with just 1 hotel. Figure out the rest after' },
        { icon: Activity, text: 'Create a launch moment, not just a launch' }
      ],
      gradient: 'linear-gradient(135deg, #2D1180 0%, #8B5CF6 60%, #13082E 100%)'
    },
    {
      num: '05',
      tag: 'PHASE 05 · NOW WHAT',
      icon: BarChart3,
      title: 'Real Numbers',
      quote: `"Getting customers is hard. Keeping them is where money lives."`,
      bullets: [
        { icon: BarChart3, text: 'Track CAC, LTV, Churn — not likes and views' },
        { icon: ShieldCheck, text: 'Find what\'s working and double down. Build systems so the business runs without you.' }
      ],
      gradient: 'linear-gradient(135deg, #13082E 0%, #4F26D2 50%, #0A0A0C 100%)'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!stackRef.current) return;
      const cardEls = stackRef.current.querySelectorAll('.large-stack-card');
      const triggerTop = window.innerHeight * 0.45;

      cardEls.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerTop && rect.bottom >= triggerTop) {
          setActiveIdx(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="training-light-sec" id="training" data-stage="TRAINING">
      <div className="wrap">
        
        {/* LIGHT THEME HEADER */}
        <div className="training-light-header">
          <span className="training-light-eyebrow">OUR TRAINING MODEL</span>
          <h2 className="training-light-title">
            The Art of Building &amp; <span className="title-serif-italic">Marketing</span>
          </h2>
          <p className="training-light-deck">
            &quot;We don&apos;t teach you how to market. We put you in the market.&quot;
          </p>
          <p className="training-light-sub">
            <strong className="hl">Real brand.</strong> <strong className="hl">Real audience.</strong> <strong className="hl">Real revenue</strong> — built and launched by you, from day one.
          </p>
        </div>

        {/* LARGE STICKY SCROLL STACK CARDS */}
        <div className="training-large-stack" ref={stackRef}>
          {cards.map((card, idx) => {
            const IconComp = card.icon;

            return (
              <div
                key={idx}
                className="large-stack-card"
                style={{
                  '--card-index': idx + 1,
                  '--sticky-top': '110px'
                }}
              >
                <div className="card-2col-layout">
                  
                  {/* LEFT COLUMN: VISUAL COVER BOX */}
                  <div className="card-media-box" style={{ background: card.gradient, position: 'relative', overflow: 'hidden', padding: 0 }}>
                    {card.image ? (
                      <>
                        <img src={card.image} alt={card.title} className="card-media-img" style={{ opacity: 1, objectFit: 'cover' }} />
                        <div style={{
                          position: 'absolute', inset: 0,
                          background: 'linear-gradient(to top, rgba(15, 7, 36, 0.92) 0%, rgba(15, 7, 36, 0.35) 60%, transparent 100%)',
                          padding: '28px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-end'
                        }}>
                          <span style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: '#B497CF',
                            letterSpacing: '0.14em',
                            marginBottom: 8,
                            textTransform: 'uppercase'
                          }}>
                            {card.tag}
                          </span>
                          <p style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontStyle: 'italic',
                            fontSize: '1.15rem',
                            color: '#ffffff',
                            margin: 0,
                            lineHeight: 1.4,
                            fontWeight: 600,
                            textShadow: '0 2px 10px rgba(0,0,0,0.6)'
                          }}>
                            {card.quote}
                          </p>
                        </div>
                      </>
                    ) : (
                      <div style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '28px',
                        boxSizing: 'border-box'
                      }}>
                        {/* Decorative mesh pattern */}
                        <div style={{
                          position: 'absolute', inset: 0, opacity: 0.15, pointerEvents: 'none',
                          backgroundImage: `radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)`,
                          backgroundSize: '18px 18px'
                        }} />

                        {/* Top Tag & Icon Badge */}
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 2 }}>
                          <span style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            color: '#B497CF',
                            letterSpacing: '0.14em',
                            textTransform: 'uppercase'
                          }}>
                            {card.tag}
                          </span>

                          <div style={{
                            width: 44, height: 44, borderRadius: 14,
                            background: 'rgba(255, 255, 255, 0.12)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255, 255, 255, 0.2)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                          }}>
                            <IconComp size={22} color="#ffffff" />
                          </div>
                        </div>

                        {/* Center Large Quote */}
                        <div style={{ position: 'relative', zIndex: 2, margin: 'auto 0' }}>
                          <p style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontStyle: 'italic',
                            fontSize: '1.3rem',
                            color: '#ffffff',
                            margin: '0 0 10px',
                            lineHeight: 1.35,
                            fontWeight: 700,
                            textShadow: '0 4px 16px rgba(0,0,0,0.5)'
                          }}>
                            {card.quote}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* RIGHT COLUMN: EXACT IMAGE CONTENT ONLY */}
                  <div className="card-info-box" style={{ display: 'flex', flexDirection: 'column' }}>
                    
                    <span className="card-phase-pill" style={{ marginBottom: 12 }}>{card.tag}</span>

                    <h3 className="card-main-heading" style={{ margin: '0 0 16px', fontSize: '1.85rem' }}>
                      {card.title}
                    </h3>

                    {/* Quote with purple accent line */}
                    <div style={{
                      borderLeft: '3px solid #4F26D2',
                      paddingLeft: '14px',
                      marginBottom: 20
                    }}>
                      <p style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontStyle: 'italic',
                        fontSize: '1.02rem',
                        color: '#4F26D2',
                        margin: 0,
                        lineHeight: 1.45,
                        fontWeight: 600
                      }}>
                        {card.quote}
                      </p>
                    </div>

                    {/* Bullets with lucide icons */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      {card.bullets.map((b, i) => {
                        const BulletIcon = b.icon;
                        return (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                            <div style={{
                              width: 28, height: 28, borderRadius: 8,
                              background: 'rgba(79, 38, 210, 0.08)',
                              border: '1px solid rgba(79, 38, 210, 0.18)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              flexShrink: 0,
                              marginTop: 1
                            }}>
                              <BulletIcon size={14} color="#4F26D2" />
                            </div>
                            <span style={{
                              fontSize: '0.92rem',
                              color: '#4A4259',
                              lineHeight: 1.5,
                              fontFamily: "'Plus Jakarta Sans', sans-serif",
                              fontWeight: 500
                            }}>
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
    </section>
  );
}
