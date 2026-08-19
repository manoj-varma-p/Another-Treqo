'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';

const categories = [
  { id: 'about', label: 'About Treqo' },
  { id: 'programme', label: 'Programme & Syllabus' },
  { id: 'career', label: 'Jobs & Career' },
];

const faqs = [
  {
    cat: 'about',
    q: "What is Treqo and who runs it?",
    a: "Treqo is the flagship EdTech programme brand of TAC School of Modern Learning Private Limited, headquartered in Madhapur, Hyderabad. TAC stands for The Art Code, and Treqo is how that vision reaches students: a hands-on, founder-level marketing programme designed to produce marketers that companies actually want to hire.",
  },
  {
    cat: 'about',
    q: "What makes Treqo different from a typical digital marketing institute?",
    a: "Most institutes teach tools. Treqo teaches thinking. Traditional institutes produce 'digital marketers' who can run ads, Treqo produces marketers, strategists, and growth specialists who understand why a business grows and can make it happen. The curriculum is built around the CEO Challenge framework using real-world problems, not mock assignments.",
  },
  {
    cat: 'about',
    q: "Where is Treqo located? Is it online or offline?",
    a: "Treqo operates as both an offline campus programme and an online programme. The offline campus is based in Madhapur, Hyderabad - the heart of Hyderabad's tech and startup ecosystem. The offline format offers real peer pressure, real collaboration, and real accountability. The online programme offers the same curriculum, mentors, and project-based structure with full flexibility.",
  },
  {
    cat: 'about',
    q: "Who are the mentors and instructors at Treqo?",
    a: "All sessions are led by active founders, CMOs, and growth practitioners running high-revenue campaigns in top Indian and global startups. You learn directly from people managing crores in ad spend, not academic lecturers.",
  },
  {
    cat: 'about',
    q: "What is the batch size and cohort structure?",
    a: "We maintain small, highly selective cohorts (25-30 students max per batch) to ensure intensive 1-on-1 mentorship, personal code/portfolio reviews, and direct placement attention for every graduate.",
  },
  {
    cat: 'programme',
    q: "How long is the programme and what does it cover?",
    a: "The programme runs for 6 months, offline, in Madhapur, Hyderabad. It is structured across 12 phases and 15 modules: Phase 1-3 cover marketing clarity, customer thinking, and funnel logic. Phase 4-5 handle idea validation and 0-to-1 execution. Phase 6-12 cover brand strategy, SEO, Google & Meta Ads, WhatsApp/Email, revenue operations, and AI scale.",
  },
  {
    cat: 'programme',
    q: "What is the CEO Challenge?",
    a: "The CEO Challenge is the backbone of Treqo's out-of-class learning, not a homework assignment but a business simulation that runs every module. The core rule: 'One real problem. One instant solution. Timing + insight + action.' Each challenge pushes students through real business scenarios.",
  },
  {
    cat: 'programme',
    q: "What industries and companies does the programme cover?",
    a: "Every module uses a different industry as the case study so students develop cross-industry fluency. The 16 industries covered include: Luxury/Jewelry (Tanishq), Healthcare (Apollo 24|7), Travel (MakeMyTrip), EV/Auto (Ola Electric), Gaming (Dream11), FMCG (Amul), and more.",
  },
  {
    cat: 'programme',
    q: "What is the three-tier project framework?",
    a: "Every phase includes three types of projects. Project 1 - Replica Project: Recreate a strategy for a top company using simulated data. Project 2 - Independent Project: Apply the framework globally. Project 3 - Live Business Project: Work on a real local business with actual data and measurable revenue.",
  },
  {
    cat: 'programme',
    q: "What tools and platforms will students learn?",
    a: "Ads & PPC: Google Ads, Meta Ads Manager, Amazon Ads/DSP. SEO: Ahrefs, SEMrush, Screaming Frog. Analytics: GA4, GTM, Looker Studio. CRM & Automation: HubSpot, Zoho CRM, WATI. AI Suite: ChatGPT, Claude, Perplexity AI, Midjourney.",
  },
  {
    cat: 'career',
    q: "What kind of roles do Treqo graduates get placed into?",
    a: "Treqo graduates are positioned for premium roles: Performance Marketing Manager (runs paid media across Google, Meta, Amazon at scale), Growth Marketer/Manager (owns acquisition, conversion, and retention), Brand Strategist, Marketing Analyst (GA4, attribution, unit economics), and D2C Specialist.",
  },
  {
    cat: 'career',
    q: "What is the 100% Placement Support process?",
    a: "Our dedicated placement cell provides 1-on-1 resume audits, live mock interviews with hiring managers, LinkedIn optimization, and direct interview pipelines with our network of 50+ partner startups and digital agencies.",
  },
  {
    cat: 'career',
    q: "What if a student wants to freelance or start their own business?",
    a: "The programme is equally suited for this path. Phase 5 (Idea to Market) and the CEO Challenge framework are built around launching and validating real businesses. Students learn pricing logic, unit economics, CAC/LTV, and client acquisition.",
  },
  {
    cat: 'career',
    q: "What certifications can students earn alongside the programme?",
    a: "Students can earn 20+ industry certifications: Google Skillshop (Search, Display, Video, PMAX, GA4), HubSpot Academy (Inbound, Email, SEO, Digital Marketing), SEMrush Academy, and optional Meta Blueprint certifications.",
  },
  {
    cat: 'career',
    q: "What is the expected salary package for graduates?",
    a: "Graduates secure high-performance entry and mid-level roles typically ranging from 4.5 LPA to 12 LPA depending on prior background, specialization track, and portfolio depth built during the programme.",
  },
];

export default function FaqSection() {
  const [activecat, setActivecat] = useState('about');
  const [openIndex, setOpenIndex] = useState(null);

  const handleCatChange = (cat) => {
    setActivecat(cat);
    setOpenIndex(null);
  };

  const filtered = faqs.filter((f) => f.cat === activecat);

  const FaqItem = ({ item, idx }) => {
    const isOpen = openIndex === idx;
    const num = String(idx + 1).padStart(2, '0');

    return (
      <motion.div
        layout
        onClick={() => setOpenIndex(isOpen ? null : idx)}
        style={{
          background: isOpen
            ? 'linear-gradient(135deg, #ffffff 0%, #faf8ff 100%)'
            : '#ffffff',
          border: isOpen
            ? '1.5px solid #4F26D2'
            : '1.5px solid rgba(79,38,210,0.15)',
          borderRadius: 0,
          borderLeft: isOpen ? '4px solid #4F26D2' : '4px solid rgba(79,38,210,0.25)',
          padding: isOpen ? '22px 24px 20px 22px' : '18px 22px 18px 22px',
          cursor: 'pointer',
          boxShadow: isOpen
            ? '6px 6px 0px #4F26D2'
            : '4px 4px 0px rgba(79,38,210,0.2)',
          transition: 'all 0.28s cubic-bezier(0.16, 1, 0.3, 1)',
          userSelect: 'none',
          position: 'relative',
        }}
      >
        {/* Number tag */}
        <div style={{
          position: 'absolute',
          top: 0,
          right: 0,
          fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
          fontSize: 10,
          fontWeight: 700,
          color: isOpen ? '#4F26D2' : 'rgba(79,38,210,0.3)',
          letterSpacing: '0.1em',
          padding: '5px 10px',
          borderLeft: isOpen ? '1px solid rgba(79,38,210,0.2)' : '1px solid rgba(79,38,210,0.08)',
          borderBottom: isOpen ? '1px solid rgba(79,38,210,0.2)' : '1px solid rgba(79,38,210,0.08)',
          transition: 'color 0.25s',
        }}>
          {num}
        </div>

        {/* Question row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 14 }}>
          <span style={{
            fontSize: 15,
            fontWeight: 700,
            color: isOpen ? '#4F26D2' : '#140B30',
            lineHeight: 1.45,
            transition: 'color 0.2s',
            fontFamily: "var(--ff-display, 'Outfit', 'Plus Jakarta Sans', sans-serif)",
            paddingRight: 28,
          }}>
            {item.q}
          </span>

          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            style={{
              flexShrink: 0,
              width: 28,
              height: 28,
              borderRadius: 0,
              background: isOpen ? '#4F26D2' : 'transparent',
              border: isOpen ? '1.5px solid #4F26D2' : '1.5px solid rgba(79,38,210,0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background 0.25s, border-color 0.25s',
              marginTop: 1,
            }}
          >
            <Plus size={14} color={isOpen ? '#fff' : '#4F26D2'} strokeWidth={2.5} />
          </motion.div>
        </div>

        {/* Answer */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="answer"
              initial={{ opacity: 0, height: 0, marginTop: 0 }}
              animate={{ opacity: 1, height: 'auto', marginTop: 14 }}
              exit={{ opacity: 0, height: 0, marginTop: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ borderTop: '1px solid rgba(79,38,210,0.1)', paddingTop: 14 }}>
                <p style={{
                  fontSize: 13.5,
                  color: '#5B5070',
                  lineHeight: 1.75,
                  margin: 0,
                  fontFamily: "var(--ff-body, 'Outfit', 'Inter', sans-serif)",
                  fontWeight: 400,
                }}>
                  {item.a}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  return (
    <section
      id="faq"
      data-stage="FAQ"
      style={{
        background: '#F5F2FB',
        padding: '100px 5% 100px',
        width: '100%',
        boxSizing: 'border-box',
        fontFamily: "var(--ff-body, 'Outfit', 'Plus Jakarta Sans', sans-serif)",
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle decorative grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.4,
        backgroundImage: `linear-gradient(rgba(79,38,210,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(79,38,210,0.06) 1px, transparent 1px)`,
        backgroundSize: '48px 48px',
      }} />

      <div style={{ maxWidth: 1120, margin: '0 auto', position: 'relative', zIndex: 2 }}>

        {/* ── Header ── */}
        <div style={{ marginBottom: 52 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(79,38,210,0.08)',
            border: '1px solid rgba(79,38,210,0.2)',
            borderRadius: 0,
            padding: '5px 14px',
            marginBottom: 18,
            boxShadow: '3px 3px 0px rgba(79,38,210,0.2)',
          }}>
            <span style={{
              fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
              fontSize: 10,
              fontWeight: 800,
              color: '#4F26D2',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}>
              Before You Apply
            </span>
          </div>

          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 52px)',
            fontWeight: 900,
            color: '#140B30',
            margin: '0 0 0',
            letterSpacing: '-0.035em',
            lineHeight: 1.05,
            fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
          }}>
            Frequently{' '}
            <span style={{
              fontFamily: "'Fraunces', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 700,
              color: '#4F26D2',
            }}>
              Asked
            </span>{' '}Questions
          </h2>
        </div>

        {/* ── Category + FAQ layout (Fixed stable height container) ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '240px 1fr',
          gap: 32,
          alignItems: 'start',
          minHeight: 520
        }}>

          {/* LEFT: Category sidebar */}
          <div style={{
            background: '#ffffff',
            border: '1.5px solid rgba(79,38,210,0.15)',
            borderRadius: 0,
            boxShadow: '4px 4px 0px rgba(79,38,210,0.15)',
            overflow: 'hidden',
            position: 'sticky',
            top: 100,
          }}>
            {categories.map((cat, i) => {
              const isActive = activecat === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCatChange(cat.id)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: '16px 20px',
                    background: isActive ? '#4F26D2' : 'transparent',
                    border: 'none',
                    borderBottom: i < categories.length - 1
                      ? '1px solid rgba(79,38,210,0.12)'
                      : 'none',
                    borderLeft: isActive ? '4px solid #140B30' : '4px solid transparent',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 8,
                    transition: 'all 0.22s ease',
                  }}
                >
                  <span style={{
                    fontSize: 13,
                    fontWeight: isActive ? 800 : 600,
                    color: isActive ? '#ffffff' : '#4F26D2',
                    fontFamily: "var(--ff-body, 'Outfit', 'Plus Jakarta Sans', sans-serif)",
                    letterSpacing: '-0.01em',
                    transition: 'color 0.22s',
                  }}>
                    {cat.label}
                  </span>
                  {isActive && (
                    <div style={{
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.2)',
                      border: '1.5px solid rgba(255,255,255,0.5)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* RIGHT: FAQ items with fixed minHeight to eliminate layout jumping */}
          <div style={{ minHeight: 520, width: '100%' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activecat}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
              >
                {filtered.map((item, i) => (
                  <FaqItem key={`${activecat}-${i}`} item={item} idx={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}

