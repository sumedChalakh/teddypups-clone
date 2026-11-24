'use client';

import React from 'react';

export type MascotState = 'sitting' | 'walking' | 'running' | 'wagging' | 'blinking' | 'peeking' | 'basket';

interface MascotProps {
  state?: MascotState;
  className?: string;
  facing?: 'left' | 'right';
  size?: number | string;
}

export function Mascot({
  state = 'sitting',
  className = '',
  facing = 'right',
  size = 120,
}: MascotProps) {
  const isFlipped = facing === 'left';

  return (
    <div
      className={`inline-block relative select-none pointer-events-none transition-transform ${
        isFlipped ? '-scale-x-100' : ''
      } ${className}`}
      style={{ width: size, height: typeof size === 'number' ? size * 0.8 : size }}
      aria-hidden="true"
    >
      <style jsx>{`
        /* CSS Keyframe Animations */
        @keyframes pup-tail-wag {
          0%, 100% { transform: rotate(-15deg); }
          50% { transform: rotate(20deg); }
        }

        @keyframes pup-blink {
          0%, 92%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }

        @keyframes pup-walk-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }

        @keyframes pup-run-bob {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-7px) rotate(2deg); }
          75% { transform: translateY(-3px) rotate(-2deg); }
        }

        @keyframes pup-leg-front {
          0%, 100% { transform: rotate(-12deg); }
          50% { transform: rotate(18deg); }
        }

        @keyframes pup-leg-back {
          0%, 100% { transform: rotate(15deg); }
          50% { transform: rotate(-15deg); }
        }

        @keyframes pup-peek-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }

        /* Class Assignments */
        .pup-tail {
          transform-origin: 50px 105px;
          animation: pup-tail-wag 0.8s ease-in-out infinite;
        }
        .state-wagging .pup-tail {
          animation: pup-tail-wag 0.4s ease-in-out infinite;
        }

        .pup-eye {
          transform-origin: center;
          animation: pup-blink 3.5s infinite;
        }

        .state-walking {
          animation: pup-walk-bob 0.6s ease-in-out infinite;
        }
        .state-walking .pup-leg-f {
          transform-origin: 105px 125px;
          animation: pup-leg-front 0.6s ease-in-out infinite;
        }
        .state-walking .pup-leg-b {
          transform-origin: 65px 125px;
          animation: pup-leg-back 0.6s ease-in-out infinite;
        }

        .state-running {
          animation: pup-run-bob 0.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .state-running .pup-leg-f {
          transform-origin: 105px 125px;
          animation: pup-leg-front 0.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .state-running .pup-leg-b {
          transform-origin: 65px 125px;
          animation: pup-leg-back 0.4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .state-running .pup-tail {
          animation: pup-tail-wag 0.3s ease-in-out infinite;
        }

        .state-peeking {
          animation: pup-peek-bob 2.5s ease-in-out infinite;
        }

        /* Disable motion when prefers-reduced-motion is enabled */
        @media (prefers-reduced-motion: reduce) {
          .pup-tail,
          .pup-eye,
          .state-walking,
          .state-walking .pup-leg-f,
          .state-walking .pup-leg-b,
          .state-running,
          .state-running .pup-leg-f,
          .state-running .pup-leg-b,
          .state-peeking {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Inline Golden/Apricot Cartoon Puppy SVG (< 8 KB) */}
      <svg
        viewBox="0 0 200 160"
        className={`w-full h-full overflow-visible state-${state}`}
        role="img"
        aria-label={`Teddy mascot puppy ${state}`}
      >
        {/* Ground shadow (hidden in peeking and basket states) */}
        {state !== 'peeking' && state !== 'basket' && (
          <ellipse cx="100" cy="148" rx="60" ry="6" fill="#2a170e" opacity="0.12" />
        )}

        {/* Tail (behind body) */}
        {state !== 'peeking' && state !== 'basket' && (
          <g className="pup-tail">
            <path
              d="M52 104 C36 94 28 80 34 68 C38 60 48 64 45 74 C42 84 50 94 56 100 Z"
              fill="#f2be6b"
              stroke="#2a170e"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
          </g>
        )}

        {/* Hind Leg (Back) */}
        {state !== 'peeking' && state !== 'basket' && (
          <g className="pup-leg-b">
            <ellipse cx="62" cy="128" rx="14" ry="18" fill="#e4a352" stroke="#2a170e" strokeWidth="3.5" />
            <path d="M54 144 C54 148 70 148 70 144" stroke="#2a170e" strokeWidth="3" fill="#e4a352" />
          </g>
        )}

        {/* Body (golden apricot) */}
        {state !== 'peeking' && state !== 'basket' && (
          <g>
            <ellipse
              cx="92"
              cy="110"
              rx="38"
              ry="26"
              fill="#f2be6b"
              stroke="#2a170e"
              strokeWidth="4"
              transform={state === 'running' ? 'rotate(-6 92 110)' : ''}
            />
            {/* Belly highlight */}
            <ellipse cx="94" cy="116" rx="24" ry="15" fill="#fbe3b4" opacity="0.9" />
          </g>
        )}

        {/* Forelegs */}
        {state !== 'peeking' && state !== 'basket' && (
          <g className="pup-leg-f">
            {/* Front Leg Left */}
            <path
              d="M106 116 L108 144 C108 147 118 147 118 144 L116 116 Z"
              fill="#f2be6b"
              stroke="#2a170e"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
            {/* Front Leg Right */}
            <path
              d="M118 116 L120 144 C120 147 130 147 130 144 L128 116 Z"
              fill="#f2be6b"
              stroke="#2a170e"
              strokeWidth="3.5"
              strokeLinejoin="round"
            />
          </g>
        )}

        {/* Basket state: Woven Basket surrounding pup */}
        {state === 'basket' && (
          <g transform="translate(10, 20)">
            <ellipse cx="90" cy="115" rx="60" ry="12" fill="#2a170e" opacity="0.15" />
            <path
              d="M35 85 C35 125 55 135 90 135 C125 135 145 125 145 85 Z"
              fill="#c27b38"
              stroke="#2a170e"
              strokeWidth="3.5"
            />
            <ellipse cx="90" cy="85" rx="55" ry="10" fill="#e4a352" stroke="#2a170e" strokeWidth="3.5" />
          </g>
        )}

        {/* Head Group (Golden/Apricot Poodle/Maltipoo Shape) */}
        <g transform={state === 'basket' ? 'translate(-10, -5)' : state === 'peeking' ? 'translate(-30, -5)' : ''}>
          {/* Fluffy ears (wagging slightly with bob) */}
          <g>
            <ellipse cx="108" cy="62" rx="14" ry="24" fill="#e4a352" stroke="#2a170e" strokeWidth="3.5" transform="rotate(-15 108 62)" />
            <ellipse cx="166" cy="62" rx="14" ry="24" fill="#e4a352" stroke="#2a170e" strokeWidth="3.5" transform="rotate(15 166 62)" />
          </g>

          {/* Main Face circle */}
          <circle cx="136" cy="68" r="34" fill="#fbe3b4" stroke="#2a170e" strokeWidth="4" />

          {/* Curly hair bumps on top of head */}
          <circle cx="120" cy="38" r="12" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.5" />
          <circle cx="136" cy="34" r="14" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.5" />
          <circle cx="152" cy="38" r="12" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.5" />

          {/* Eyes (with blinking animation) */}
          <g className="pup-eye">
            <ellipse cx="124" cy="64" rx="4.5" ry="5.5" fill="#2a170e" />
            <circle cx="125.5" cy="62.5" r="1.5" fill="#ffffff" />
            
            <ellipse cx="148" cy="64" rx="4.5" ry="5.5" fill="#2a170e" />
            <circle cx="149.5" cy="62.5" r="1.5" fill="#ffffff" />
          </g>

          {/* White Snout / Muzzle */}
          <ellipse cx="136" cy="78" rx="14" ry="10" fill="#ffffff" stroke="#2a170e" strokeWidth="2.5" />

          {/* Small black triangular nose */}
          <path d="M131 74 Q136 71 141 74 Q136 80 131 74 Z" fill="#2a170e" />

          {/* Mouth line */}
          <path d="M136 78 Q136 83 133 84 M136 83 Q139 84 139 83" stroke="#2a170e" strokeWidth="2" fill="none" strokeLinecap="round" />

          {/* Rosy blush on cheeks */}
          <ellipse cx="116" cy="74" rx="6" ry="3.5" fill="#f9b9a6" opacity="0.85" />
          <ellipse cx="156" cy="74" rx="6" ry="3.5" fill="#f9b9a6" opacity="0.85" />

          {/* Little Front Paws peeking over edge in peeking or basket state */}
          {(state === 'peeking' || state === 'basket') && (
            <g>
              <ellipse cx="122" cy="100" rx="9" ry="7" fill="#fbe3b4" stroke="#2a170e" strokeWidth="3" />
              <ellipse cx="150" cy="100" rx="9" ry="7" fill="#fbe3b4" stroke="#2a170e" strokeWidth="3" />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
}
