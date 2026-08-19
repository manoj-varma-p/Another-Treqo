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

      {/* State-specific facial expressions & hands */}
      {state === 'confused' && (
        <>
          {/* Confused eyes */}
          <circle cx="72" cy="64" r="3" fill="#0A0A0A" />
          <circle cx="88" cy="62" r="4.5" fill="#0A0A0A" />
          {/* Squiggly mouth */}
          <path d="M72 77 Q80 72 88 77" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Question mark above head in purple */}
          <path
            d="M96 28 C96 20, 108 20, 108 28 C108 34, 102 36, 102 42 M102 48 L102 50"
            stroke="#6D28FF"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
          />
        </>
      )}

      {state === 'striking' && (
        <>
          {/* Focused eyes */}
          <line x1="68" y1="62" x2="76" y2="65" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
          <line x1="84" y1="65" x2="92" y2="62" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
          <path d="M74 76 Q80 79 86 76" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Hand holding purple marker */}
          <path d="M100 95 L125 70" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" />
          <circle cx="127" cy="68" r="5" fill="#6D28FF" />
        </>
      )}

      {state === 'pointing' && (
        <>
          {/* Determined smile */}
          <circle cx="72" cy="64" r="3.5" fill="#0A0A0A" />
          <circle cx="88" cy="64" r="3.5" fill="#0A0A0A" />
          <path d="M72 75 Q80 84 88 75" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" fill="none" />
          {/* Pointing arm */}
          <path d="M100 98 Q125 90 145 92" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" fill="none" />
          <polygon points="145,88 155,92 145,96" fill="#6D28FF" />
        </>
      )}

      {state === 'holding_portfolio' && (
        <>
          {/* Proud big smile */}
          <circle cx="72" cy="63" r="3.5" fill="#0A0A0A" />
          <circle cx="88" cy="63" r="3.5" fill="#0A0A0A" />
          <path d="M70 74 Q80 86 90 74" fill="#0A0A0A" />
          {/* Portfolio briefcase held in front */}
          <rect x="58" y="100" width="44" height="32" rx="4" fill="#0A0A0A" />
          <rect x="64" y="94" width="32" height="8" rx="2" fill="#6D28FF" stroke="#0A0A0A" strokeWidth="2" />
          <text x="63" y="120" fill="#F3F0E7" fontSize="7" fontWeight="900" fontFamily="monospace">PROOFS</text>
        </>
      )}

      {state === 'default' && (
        <>
          {/* Friendly standard eyes & smile */}
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
