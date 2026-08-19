'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, ArrowRight, Building, Laptop, Rocket } from 'lucide-react';
import { DoodleBadge } from './Doodles';

export default function ApplyModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    track: 'campus',
    name: '',
    phone: '',
    email: '',
    goal: 'career_switch'
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = (e) => {
    e?.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setSubmitted(true);
    }
  };

  const tracks = [
    { id: 'campus', title: 'Campus Edition (Offline)', meta: '9 Months · Madhapur, Hyderabad · 30+ Live Projects', icon: Building },
    { id: 'online', title: 'New Age Marketing (Online)', meta: '5 Months · Live Interactive Cohort · Placement Support', icon: Laptop },
    { id: 'executive', title: 'Founder & Executive Growth', meta: '4 Months · Strategy & CAC-to-LTV Modeling', icon: Rocket }
  ];

  return (
    <AnimatePresence>
      <div style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        background: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(12px)',
      }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{
            background: '#F3F0E7',
            border: '2px solid #0A0A0A',
            borderRadius: '24px',
            boxShadow: '12px 12px 0px #0A0A0A',
            maxWidth: '560px',
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            color: '#0A0A0A',
            fontFamily: "var(--ff-body, 'Outfit', sans-serif)",
          }}
        >
          {/* Header Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '20px 24px',
            borderBottom: '2px solid #0A0A0A',
            background: '#ffffff',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                fontWeight: 900,
                fontSize: '18px',
                letterSpacing: '-0.02em',
              }}>
                TREQO <span style={{ color: '#ffffff', background: '#6D28FF', padding: '2px 6px', borderRadius: '4px', fontSize: '12px' }}>ADMISSIONS</span>
              </span>
              <DoodleBadge text={`STEP 0${step}/03`} rotate={1} highlight={false} />
            </div>

            <button
              onClick={onClose}
              style={{
                background: 'none',
                border: '1.5px solid #0A0A0A',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s',
                color: '#0A0A0A',
              }}
              aria-label="Close modal"
            >
              <X size={16} />
            </button>
          </div>

          {/* Body Content */}
          <div style={{ padding: '28px 24px' }}>
            {!submitted ? (
              <form onSubmit={handleNext}>
                {step === 1 && (
                  <div>
                    <h3 style={{
                      fontSize: '22px',
                      fontWeight: 900,
                      margin: '0 0 6px',
                      fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                      color: '#0A0A0A',
                    }}>
                      Select Your Learning Track
                    </h3>
                    <p style={{ fontSize: '13px', color: '#555555', margin: '0 0 20px' }}>
                      Choose the format that fits your career goal.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {tracks.map((t) => {
                        const Icon = t.icon;
                        const isSelected = formData.track === t.id;
                        return (
                          <div
                            key={t.id}
                            onClick={() => setFormData({ ...formData, track: t.id })}
                            style={{
                              border: isSelected ? '2px solid #0A0A0A' : '1.5px solid rgba(10, 10, 10, 0.15)',
                              background: isSelected ? '#6D28FF' : '#ffffff',
                              color: isSelected ? '#ffffff' : '#0A0A0A',
                              borderRadius: '14px',
                              padding: '14px 16px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: 14,
                              boxShadow: isSelected ? '4px 4px 0px #0A0A0A' : 'none',
                              transform: isSelected ? 'translateY(-2px)' : 'none',
                              transition: 'all 0.2s',
                            }}
                          >
                            <div style={{
                              width: '36px',
                              height: '36px',
                              borderRadius: '10px',
                              background: isSelected ? '#ffffff' : '#F3F0E7',
                              color: isSelected ? '#6D28FF' : '#0A0A0A',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}>
                              <Icon size={18} />
                            </div>
                            <div>
                              <strong style={{ display: 'block', fontSize: '14px', fontWeight: 800 }}>{t.title}</strong>
                              <span style={{ fontSize: '11px', color: isSelected ? '#ffffff' : '#666666', fontWeight: 500 }}>{t.meta}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div>
                    <h3 style={{
                      fontSize: '22px',
                      fontWeight: 900,
                      margin: '0 0 6px',
                      fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                      color: '#0A0A0A',
                    }}>
                      What is your primary goal?
                    </h3>
                    <p style={{ fontSize: '13px', color: '#555555', margin: '0 0 20px' }}>
                      We tailor the project pipeline to your target trajectory.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                      {[
                        { id: 'career_switch', label: 'Get Hired in High-Growth Marketing Agency / Startup' },
                        { id: 'freelance', label: 'Start Freelancing & Acquire High-Ticket Clients' },
                        { id: 'founder', label: 'Scale My Own Brand & Master Paid Acquisition' }
                      ].map((g) => {
                        const isSelected = formData.goal === g.id;
                        return (
                          <div
                            key={g.id}
                            onClick={() => setFormData({ ...formData, goal: g.id })}
                            style={{
                              border: isSelected ? '2px solid #0A0A0A' : '1.5px solid rgba(10, 10, 10, 0.15)',
                              background: isSelected ? '#6D28FF' : '#ffffff',
                              color: isSelected ? '#ffffff' : '#0A0A0A',
                              borderRadius: '12px',
                              padding: '14px 16px',
                              cursor: 'pointer',
                              fontSize: '13.5px',
                              fontWeight: 700,
                              boxShadow: isSelected ? '4px 4px 0px #0A0A0A' : 'none',
                              transition: 'all 0.2s',
                            }}
                          >
                            {g.label}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h3 style={{
                      fontSize: '22px',
                      fontWeight: 900,
                      margin: '0 0 6px',
                      fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                      color: '#0A0A0A',
                    }}>
                      Your Contact Details
                    </h3>
                    <p style={{ fontSize: '13px', color: '#555555', margin: '0 0 18px' }}>
                      Admissions counsel will reach out within 2 hours.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', marginBottom: 4, fontFamily: "var(--ff-mono, monospace)", color: '#0A0A0A' }}>
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            borderRadius: '10px',
                            border: '1.5px solid #0A0A0A',
                            fontSize: '14px',
                            boxSizing: 'border-box',
                            background: '#ffffff',
                            fontFamily: 'inherit',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', marginBottom: 4, fontFamily: "var(--ff-mono, monospace)", color: '#0A0A0A' }}>
                          WhatsApp Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            borderRadius: '10px',
                            border: '1.5px solid #0A0A0A',
                            fontSize: '14px',
                            boxSizing: 'border-box',
                            background: '#ffffff',
                            fontFamily: 'inherit',
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', marginBottom: 4, fontFamily: "var(--ff-mono, monospace)", color: '#0A0A0A' }}>
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="name@email.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            borderRadius: '10px',
                            border: '1.5px solid #0A0A0A',
                            fontSize: '14px',
                            boxSizing: 'border-box',
                            background: '#ffffff',
                            fontFamily: 'inherit',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Footer Buttons */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '28px',
                  paddingTop: '16px',
                  borderTop: '1px solid rgba(10, 10, 10, 0.1)',
                }}>
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        fontSize: '13px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        color: '#6D28FF',
                      }}
                    >
                      ← Back
                    </button>
                  ) : <div />}

                  <button
                    type="submit"
                    style={{
                      background: '#6D28FF',
                      color: '#ffffff',
                      border: '2px solid #0A0A0A',
                      borderRadius: '999px',
                      padding: '12px 28px',
                      fontWeight: 900,
                      fontSize: '13px',
                      letterSpacing: '0.04em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                      boxShadow: '4px 4px 0px #0A0A0A',
                      transition: 'all 0.2s',
                    }}
                  >
                    <span>{step === 3 ? 'Submit Application' : 'Continue'}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: '#6D28FF',
                  border: '2px solid #0A0A0A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  boxShadow: '4px 4px 0px #0A0A0A',
                }}>
                  <CheckCircle2 size={32} color="#ffffff" />
                </div>
                <h3 style={{
                  fontSize: '24px',
                  fontWeight: 900,
                  margin: '0 0 8px',
                  fontFamily: "var(--ff-display, 'Outfit', sans-serif)",
                  color: '#0A0A0A',
                }}>
                  Application Received!
                </h3>
                <p style={{ fontSize: '14px', color: '#555555', margin: '0 0 24px', lineHeight: 1.5 }}>
                  Welcome aboard, <strong>{formData.name || 'Marketer'}</strong>. Our admissions director will WhatsApp your project brief &amp; interview slot shortly.
                </p>

                <button
                  onClick={onClose}
                  style={{
                    background: '#6D28FF',
                    color: '#ffffff',
                    border: '2px solid #0A0A0A',
                    borderRadius: '999px',
                    padding: '12px 32px',
                    fontWeight: 900,
                    fontSize: '13px',
                    cursor: 'pointer',
                    boxShadow: '3px 3px 0px #0A0A0A',
                  }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
