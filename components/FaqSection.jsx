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
    a: "Most institutes teach tools. Treqo teaches thinking. Traditional institutes produce 'digital marketers' who can run ads, Treqo produces marketers, strategists, and growth specialists who understand why a business grows and can make it happen. The curriculum is built around the CEO Challenge framework using real-world problems, not mock assignments. Every module maps to an actual Indian industry and company (16 industries covered). Students graduate with 30+ projects across real and simulated businesses.",
  },
  {
    cat: 'about',
    q: "Where is Treqo located? Is it online or offline?",
    a: "Treqo operates as both an offline campus programme and an online programme. The offline campus is based in Madhapur, Hyderabad - the heart of Hyderabad's tech and startup ecosystem. The offline format offers real peer pressure, real collaboration, and real accountability. The online programme offers the same curriculum, mentors, and project-based structure with full flexibility. Contact: support@theartcode.org",
  },
  {
    cat: 'programme',
    q: "How long is the programme and what does it cover?",
    a: "The programme runs for 6 months, offline, in Madhapur, Hyderabad. It is structured across 12 phases and 15 modules: Phase 1-3 cover marketing clarity, customer thinking, and funnel logic. Phase 4-5 handle idea validation and 0-to-1 execution. Phase 6 covers brand strategy. Phase 7A-7D are deep dives into SEO, Google Ads, Meta Ads, and WhatsApp/Email. Phase 8-12 cover content, performance media, revenue operations, analytics, automation, AI-driven scale, and brand leadership. The learning split is 30-40% classroom strategy and 60-70% real-world execution.",
  },
  {
    cat: 'programme',
    q: "What is the CEO Challenge?",
    a: "The CEO Challenge is the backbone of Treqo's out-of-class learning, not a homework assignment but a business simulation that runs every module. The core rule: 'One real problem. One instant solution. Timing + insight + action.' Each challenge pushes students through a real business scenario, defining problems, validating markets, designing offers, launching GTMs, and measuring revenue. By graduation, students complete 12+ CEO Challenges across different industries.",
  },
  {
    cat: 'programme',
    q: "What industries and companies does the programme cover?",
    a: "Every module uses a different industry as the case study so students develop cross-industry fluency. The 16 industries covered include: Luxury/Jewelry (Tanishq), Healthcare (Apollo 24|7), Travel (MakeMyTrip), EV/Auto (Ola Electric), Gaming (Dream11), FMCG (Amul), Telecom (Airtel), InsurTech (Policybazaar), Home Services (Urban Company), Food Delivery (Zomato), Fitness (Cult.fit), Fintech (Zerodha), Global Sports (Nike India), Hospitality (OYO), Music/OTT (Spotify India), and F&B Retail (Starbucks India).",
  },
  {
    cat: 'programme',
    q: "What is the three-tier project framework?",
    a: "Every phase includes three types of projects. Project 1 - Replica Project: Recreate a strategy for a top company using simulated data. Project 2 - Independent Project: Apply the same framework to any brand of the student's choice globally. Project 3 - Live Business Project: Work on a real local business with actual data, real customers, and measurable outcomes. By graduation, students hold a portfolio of 30+ projects spanning 16+ industries.",
  },
  {
    cat: 'programme',
    q: "What tools and platforms will students learn?",
    a: "Ads & PPC: Google Ads (Search, Display, YouTube, PMAX, Shopping), Meta Ads Manager, Amazon Ads/DSP. SEO: Ahrefs, SEMrush, Screaming Frog, SurferSEO, Google Search Console. Analytics: GA4, GTM, Looker Studio, Excel/Sheets pivot tables. CRM & Automation: HubSpot, Zoho CRM, WATI/AiSensy (WhatsApp), Mailchimp/Brevo, Zapier/Make. Design & AI: Canva AI, Leonardo AI, Midjourney, DALL-E 3. AI Suite: ChatGPT, Claude, Perplexity AI. E-commerce: Amazon Seller Central, Flipkart Seller Hub, Unicommerce.",
  },
  {
    cat: 'programme',
    q: "Is there a gate or checkpoint in the programme?",
    a: "Yes. Phase 4 is a mandatory gate. Students cannot progress to the execution phases without passing Phase 4's CEO Gate Challenge. Students must submit: a validated problem statement, identified target customer with pain frequency and urgency data, evidence that existing solutions fail this customer, and a 'would a real company work on this?' judgement. This gate exists because the rest of the programme builds on real ideas, weak foundations produce weak marketers.",
  },
  {
    cat: 'career',
    q: "What kind of roles do Treqo graduates get placed into?",
    a: "Treqo graduates are positioned for premium roles: Performance Marketing Manager (runs paid media across Google, Meta, Amazon at scale), Growth Marketer/Manager (owns acquisition, conversion, and retention end-to-end), Brand Strategist (builds brand positioning and go-to-market plans), Marketing Analyst (GA4, attribution, cohort analysis, unit economics), Content Strategist (uses content as a revenue engine), and D2C/Marketplace Specialist (high-paying skill set across Amazon, Flipkart, Blinkit, Zepto).",
  },
  {
    cat: 'career',
    q: "What if a student wants to freelance or start their own business?",
    a: "The programme is equally suited for this path. Phase 5 (Idea to Market) and the CEO Challenge framework are literally built around launching and validating real businesses. By the end of the programme, students will have validated at least one real offer in the market, built a working GTM plan with a real local business, learned pricing logic, unit economics, CAC/LTV, and revenue operations, and mastered tools like Meta Ads, Google Ads, and WhatsApp automation - all billable freelance skills.",
  },
  {
    cat: 'career',
    q: "What certifications can students earn alongside the programme?",
    a: "Students can earn 20+ industry certifications. Free via Google Skillshop: Search, Display, Video, Shopping, PMAX, GA4 certifications. Free via HubSpot Academy: Inbound, Content, Email, Social Media, SEO, Digital Marketing. Free via SEMrush Academy: SEO, PPC, Content Marketing, Social Media. Free + Internationally Accredited: Google Fundamentals of Digital Marketing (co-recognized by IAB Europe and The Open University UK). Paid (Optional): Meta Blueprint certifications ($99-$150) for students targeting agency and Meta Ads roles.",
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
          padding: isOpen ? '24px 24px 22px 22px' : '20px 22px 20px 22px',
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
          fontFamily: "'JetBrains Mono', monospace",
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
            fontFamily: "'Plus Jakarta Sans', sans-serif",
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
                  fontFamily: "'Inter', sans-serif",
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
        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
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
              fontFamily: "'JetBrains Mono', monospace",
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
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            Frequently{' '}
            <span style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontStyle: 'italic',
              fontWeight: 700,
              color: '#4F26D2',
            }}>
              Asked
            </span>{' '}Questions
          </h2>
        </div>

        {/* ── Category + FAQ layout ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 32, alignItems: 'start' }}>

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
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
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

          {/* RIGHT: FAQ items */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activecat}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', gap: 12 }}
            >
              {filtered.map((item, i) => (
                <FaqItem key={`${activecat}-${i}`} item={item} idx={i} />
              ))}
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}

