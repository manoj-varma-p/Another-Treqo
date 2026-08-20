'use client';
import React from 'react';

// Character with different moods/states in #F3F0E7 & Purple theme
export function TreqoDoodle({ state = 'default', size = 120, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ overflow: 'visible' }}
    >
      {/* Glow shadow in Treqo Purple */}
      <circle cx="80" cy="140" r="40" fill="rgba(109, 40, 255, 0.25)" filter="blur(8px)" />

      {/* Body / Torso */}
      <path
        d="M60 100 C60 85, 100 85, 100 100 L105 135 C105 140, 55 140, 55 135 Z"
        fill="#F3F0E7"
        stroke="#0A0A0A"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Signature Treqo Purple Hoodie/Badge Accent */}
      <path
        d="M70 105 Q80 115 90 105"
        stroke="#6D28FF"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Head */}
      <circle
        cx="80"
        cy="65"
        r="28"
        fill="#F3F0E7"
        stroke="#0A0A0A"
        strokeWidth="3.5"
      />

      {/* Cap / Beanie tilted */}
      <path
        d="M56 55 C56 38, 104 38, 104 55 Z"
        fill="#0A0A0A"
        stroke="#0A0A0A"
        strokeWidth="2"
      />
      <rect x="52" y="52" width="56" height="6" rx="3" fill="#6D28FF" />

      {/* ── STATE-SPECIFIC CUSTOM ACCESSORIES & FACIAL EXPRESSIONS ── */}

      {/* 1. CONFUSED (Starting State) */}
      {state === 'confused' && (
        <>
          <circle cx="72" cy="64" r="3" fill="#0A0A0A" />
          <circle cx="88" cy="62" r="4.5" fill="#0A0A0A" />
          <path d="M72 77 Q80 72 88 77" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Question mark above head in purple */}
          <path
            d="M96 28 C96 20, 108 20, 108 28 C108 34, 102 36, 102 42 M102 48 L102 50"
            stroke="#6D28FF"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
          />
        </>
      )}

      {/* 2. META ADS (Lightning Speed Creator) */}
      {state === 'meta_ads' && (
        <>
          {/* Lightning eye goggles */}
          <path d="M64 62 L74 62 L68 68 L78 68" stroke="#6D28FF" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M82 62 L92 62 L86 68 L96 68" stroke="#6D28FF" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Wide energized smile */}
          <path d="M70 76 Q80 88 90 76" fill="#6D28FF" stroke="#0A0A0A" strokeWidth="2" />
          {/* Dual Lightning sparks floating above */}
          <path d="M102 24 L108 34 L104 36 L112 46" stroke="#6D28FF" strokeWidth="3" strokeLinecap="round" fill="none" />
          <path d="M50 28 L56 36 L52 38 L58 46" stroke="#6D28FF" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </>
      )}

      {/* 3. SEO 186%+ (The Growth Analyst) */}
      {state === 'seo' && (
        <>
          {/* Round magnifying glasses */}
          <circle cx="71" cy="64" r="7" fill="rgba(109, 40, 255, 0.15)" stroke="#0A0A0A" strokeWidth="2.5" />
          <circle cx="89" cy="64" r="7" fill="rgba(109, 40, 255, 0.15)" stroke="#0A0A0A" strokeWidth="2.5" />
          <line x1="78" y1="64" x2="82" y2="64" stroke="#0A0A0A" strokeWidth="2" />
          <circle cx="71" cy="64" r="3" fill="#0A0A0A" />
          <circle cx="89" cy="64" r="3" fill="#0A0A0A" />
          {/* Smart smile */}
          <path d="M74 76 Q80 82 86 76" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Upward trending line chart above head */}
          <path d="M92 38 L98 32 L106 36 L114 26" stroke="#6D28FF" strokeWidth="3" strokeLinecap="round" fill="none" />
          <polygon points="112,24 118,26 114,32" fill="#6D28FF" />
        </>
      )}

      {/* 4. ROAS 3.8× (Target Bullseye Sniper) */}
      {state === 'roas' && (
        <>
          {/* Bullseye target on right eye */}
          <circle cx="72" cy="64" r="3" fill="#0A0A0A" />
          <circle cx="88" cy="64" r="8" fill="none" stroke="#6D28FF" strokeWidth="2" />
          <circle cx="88" cy="64" r="3" fill="#6D28FF" />
          <line x1="88" y1="53" x2="88" y2="75" stroke="#6D28FF" strokeWidth="1.5" />
          <line x1="77" y1="64" x2="99" y2="64" stroke="#6D28FF" strokeWidth="1.5" />
          {/* Confident smirk */}
          <path d="M72 76 Q82 82 88 74" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* 3.8X Badge flag above */}
          <rect x="94" y="24" width="34" height="16" rx="4" fill="#6D28FF" stroke="#0A0A0A" strokeWidth="1.5" />
          <text x="98" y="36" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="monospace">3.8X</text>
        </>
      )}

      {/* 5. 247 LEADS (On Fire Growth Hacker) */}
      {state === 'leads' && (
        <>
          {/* Fire flames above beanie */}
          <path
            d="M74 44 C72 32, 78 26, 80 18 C84 26, 90 28, 88 38 C92 34, 96 32, 94 44 Z"
            fill="#FF5722"
            stroke="#0A0A0A"
            strokeWidth="2"
          />
          <path
            d="M78 44 C76 36, 80 32, 81 26 C83 32, 86 34, 85 44 Z"
            fill="#FFC107"
          />
          {/* Excited eyes & open laugh mouth */}
          <circle cx="72" cy="64" r="4" fill="#0A0A0A" />
          <circle cx="88" cy="64" r="4" fill="#0A0A0A" />
          <path d="M70 74 Q80 88 90 74 Z" fill="#FF5722" stroke="#0A0A0A" strokeWidth="2" />
        </>
      )}

      {/* 6. GOOGLE ADS (Search Master) */}
      {state === 'google_ads' && (
        <>
          {/* Focused scholar eyes */}
          <line x1="68" y1="62" x2="76" y2="65" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
          <line x1="84" y1="65" x2="92" y2="62" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
          <path d="M74 76 Q80 80 86 76" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Holding big magnifying search glass */}
          <path d="M102 95 L122 75" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" />
          <circle cx="126" cy="71" r="12" fill="rgba(109, 40, 255, 0.2)" stroke="#6D28FF" strokeWidth="3" />
          <circle cx="126" cy="71" r="4" fill="#6D28FF" />
        </>
      )}

      {/* 7. CAMPAIGN LIVE (Broadcast Commander) */}
      {state === 'campaign_live' && (
        <>
          {/* Headset with microphone */}
          <path d="M52 64 C52 44, 108 44, 108 64" stroke="#0A0A0A" strokeWidth="3" fill="none" />
          <rect x="49" y="60" width="6" height="12" rx="2" fill="#6D28FF" />
          <rect x="105" y="60" width="6" height="12" rx="2" fill="#6D28FF" />
          <path d="M108 68 L114 78 L106 80" stroke="#0A0A0A" strokeWidth="2" fill="none" />
          <circle cx="104" cy="80" r="3" fill="#6D28FF" />
          {/* Wink & confident smile */}
          <path d="M68 64 Q72 61 76 64" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
          <circle cx="88" cy="63" r="3.5" fill="#0A0A0A" />
          <path d="M72 75 Q80 84 88 75" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Pulsing LIVE green/purple beacon dot above */}
          <circle cx="80" cy="22" r="5" fill="#00E676" stroke="#0A0A0A" strokeWidth="1.5" />
        </>
      )}

      {/* 8. REVENUE ₹18.5k (The Rainmaker / Full Flex) */}
      {state === 'revenue' && (
        <>
          {/* Dark cool thug/flex shades */}
          <polygon points="62,60 76,60 74,70 64,70" fill="#0A0A0A" stroke="#6D28FF" strokeWidth="1.5" />
          <polygon points="84,60 98,60 96,70 86,70" fill="#0A0A0A" stroke="#6D28FF" strokeWidth="1.5" />
          <line x1="76" y1="63" x2="84" y2="63" stroke="#0A0A0A" strokeWidth="3" />
          {/* Golden dollar smile */}
          <path d="M70 76 Q80 88 90 76" fill="#0A0A0A" stroke="#0A0A0A" strokeWidth="2" />
          {/* Cash Briefcase in front */}
          <rect x="56" y="98" width="48" height="34" rx="4" fill="#0A0A0A" stroke="#6D28FF" strokeWidth="2" />
          <rect x="64" y="92" width="32" height="8" rx="2" fill="#6D28FF" stroke="#0A0A0A" strokeWidth="2" />
          <text x="63" y="119" fill="#F3F0E7" fontSize="8" fontWeight="900" fontFamily="monospace">₹ REVENUE</text>
        </>
      )}

      {/* Default fallback */}
      {state === 'default' && (
        <>
          <circle cx="72" cy="64" r="3.5" fill="#0A0A0A" />
          <circle cx="88" cy="64" r="3.5" fill="#0A0A0A" />
          <path d="M72 75 Q80 82 88 75" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        </>
      )}
    </svg>
  );
}

// Hand-drawn strike-through cross
export function StrikeThrough({ color = '#6D28FF', width = 140, height = 30, className = '' }) {
  return (
    <svg width={width} height={height} viewBox="0 0 140 30" fill="none" className={className}>
      <path
        d="M5 18 C35 8, 75 22, 135 10"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M12 12 C45 22, 95 6, 130 18"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}

// Hand-drawn doodle arrow
export function DoodleArrow({ direction = 'right', color = '#6D28FF', size = 48, className = '' }) {
  return (
    <svg
      width={size}
      height={size * 0.5}
      viewBox="0 0 60 30"
      fill="none"
      className={className}
      style={{
        transform: direction === 'down' ? 'rotate(90deg)' : direction === 'left' ? 'rotate(180deg)' : 'none',
      }}
    >
      <path
        d="M4 16 Q28 6 52 14"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M42 6 L54 14 L42 22"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Handwritten annotation badge in #F3F0E7 & Purple theme
export function DoodleBadge({ text, rotate = -2, highlight = true }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: highlight ? '#6D28FF' : '#F3F0E7',
        color: highlight ? '#ffffff' : '#0A0A0A',
        fontFamily: "var(--ff-mono, 'JetBrains Mono', monospace)",
        fontSize: '11px',
        fontWeight: 800,
        padding: '3px 9px',
        border: '1.5px solid #0A0A0A',
        borderRadius: '6px',
        boxShadow: highlight ? '2px 2px 0px #0A0A0A' : '2px 2px 0px #0A0A0A',
        transform: `rotate(${rotate}deg)`,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
      }}
    >
      {text}
    </span>
  );
}
