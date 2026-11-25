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
  size = 140,
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
        /* Pure CSS keyframe animations (< 8KB) */
        @keyframes pup-tail-wag {
          0%, 100% { transform: rotate(26deg); }
          50% { transform: rotate(44deg); }
        }

        @keyframes pup-tail-wag-fast {
          0%, 100% { transform: rotate(20deg); }
          50% { transform: rotate(50deg); }
        }

        @keyframes pup-blink {
          0%, 92%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.08); }
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

        @keyframes pup-leg-f {
          0%, 100% { transform: rotate(-10deg); }
          50% { transform: rotate(18deg); }
        }

        @keyframes pup-leg-b {
          0%, 100% { transform: rotate(16deg); }
          50% { transform: rotate(-12deg); }
        }

        @keyframes pup-ear-bob {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(-3deg); }
        }

        /* Classes */
        .pup-tail-anim {
          transform-origin: 84px 150px;
          animation: pup-tail-wag 1.2s ease-in-out infinite;
        }
        .state-wagging .pup-tail-anim,
        .state-running .pup-tail-anim {
          animation: pup-tail-wag-fast 0.35s ease-in-out infinite;
        }

        .pup-eyes-blink {
          transform-origin: 212px 98px;
          animation: pup-blink 3.8s infinite;
        }

        .pup-ears-anim {
          transform-origin: 212px 82px;
          animation: pup-ear-bob 2.4s ease-in-out infinite;
        }

        .state-walking {
          animation: pup-walk-bob 0.65s ease-in-out infinite;
        }
        .state-walking .pup-anim-ff {
          transform-origin: 168px 192px;
          animation: pup-leg-f 0.65s ease-in-out infinite;
        }
        .state-walking .pup-anim-bf {
          transform-origin: 94px 192px;
          animation: pup-leg-b 0.65s ease-in-out infinite;
        }

        .state-running {
          animation: pup-run-bob 0.45s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .state-running .pup-anim-ff {
          transform-origin: 168px 192px;
          animation: pup-leg-f 0.45s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .state-running .pup-anim-bf {
          transform-origin: 94px 192px;
          animation: pup-leg-b 0.45s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .pup-tail-anim,
          .pup-eyes-blink,
          .pup-ears-anim,
          .state-walking,
          .state-running,
          .pup-anim-ff,
          .pup-anim-bf {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>

      {/* Fluffy Apricot Poodle / Teddy Mascot SVG (Matching reference vector paths) */}
      <svg
        viewBox="0 0 300 240"
        className={`w-full h-full overflow-visible state-${state}`}
        role="img"
        aria-label={`Teddy mascot puppy ${state}`}
      >
        <g data-p="root">
          {/* Ground shadow (hidden in basket state) */}
          {state !== 'basket' && (
            <ellipse
              cx="150"
              cy="230"
              rx="92"
              ry="7"
              fill="#2a170e"
              opacity="0.14"
            />
          )}

          {/* Body & Legs for walking/running */}
          {(state === 'walking' || state === 'running') ? (
            <g data-p="body">
              {/* Back foot (far) */}
              <g className="pup-anim-bf" transform="translate(94 192)">
                <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14Z" fill="#e4a352" />
                <path d="M-14 -14 C-14 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 14 4 14 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              </g>

              {/* Front foot (far) */}
              <g className="pup-anim-ff" transform="translate(168 192)">
                <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14Z" fill="#e4a352" />
                <path d="M-11 -14 C-11 4 -12 18 -12 27 C-12 34 -7 36 0 36 C9 36 13 33 13 27 C13 18 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              </g>

              {/* Fluffy Tail */}
              <g className="pup-tail-anim">
                <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
              </g>

              {/* Fluffy Body Cloud Contour */}
              <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
              <path d="M182.7 196.4Q169.4 196.9 166.6 183.0Q156.1 174.1 162.3 161.5Q159.6 147.6 171.9 142.2Q178.2 129.7 191.0 134.0Q203.3 128.7 210.5 140.8Q223.1 145.2 221.3 159.3Q228.4 171.5 218.5 181.0Q216.6 195.1 203.2 195.7Q193.3 205.1 182.7 196.4Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />

              {/* Front foot (near) */}
              <g className="pup-anim-ff" transform="translate(186 194)">
                <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
                <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              </g>
            </g>
          ) : state === 'basket' ? (
            /* Basket State */
            <g transform="translate(45, 120)">
              <ellipse cx="65" cy="80" rx="75" ry="14" fill="#2a170e" opacity="0.14" />
              <path d="M-5 45 C-5 95 25 105 65 105 C105 105 135 95 135 45 Z" fill="#8c4a2a" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" />
              <ellipse cx="65" cy="45" rx="70" ry="13" fill="#a24a1a" stroke="#2a170e" strokeWidth="3.4" />
              {/* Basket weave accents */}
              <path d="M15 56 Q65 68 115 56 M20 74 Q65 86 110 74" stroke="#f2be6b" strokeWidth="2.5" fill="none" opacity="0.7" />
            </g>
          ) : (
            /* Sitting Pose (Default) - Round Fluffy Apricot Body with Haunches */
            <g data-p="sitting-body">
              {/* Fluffy Tail */}
              <g className="pup-tail-anim">
                <path d="M86 152 C80 146 76 140 74 136" stroke="#2a170e" strokeWidth="9" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                <path d="M86 152 C80 146 76 140 74 136" stroke="#f2be6b" strokeWidth="4" fill="none" strokeLinecap="round" />
                <path d="M70.0 110.0Q78.1 105.0 80.9 113.7Q90.5 114.8 86.7 123.2Q93.4 129.9 84.7 134.0Q85.2 143.1 75.8 141.0Q70.0 148.3 64.2 141.0Q54.8 143.1 55.3 134.0Q46.6 129.9 53.3 123.2Q49.5 114.8 59.1 113.7Q61.9 105.0 70.0 110.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
              </g>

              {/* Body Fluff */}
              <path d="M76.8 175.6Q69.0 167.9 78.2 160.7Q76.6 151.8 90.3 147.3Q95.2 138.9 110.9 137.9Q121.6 131.3 136.7 134.0Q151.1 130.5 162.9 136.4Q178.7 136.4 185.3 144.5Q199.7 148.2 199.7 157.1Q210.3 163.7 203.9 171.9Q208.7 180.4 197.0 186.3Q195.3 195.2 180.3 198.0Q172.3 205.7 156.6 204.8Q143.7 210.0 130.0 205.6Q114.5 207.4 105.1 200.2Q89.7 198.3 86.3 189.6Q73.6 184.3 76.8 175.6Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />

              {/* Haunch (Round curled sitting rear leg) */}
              <g data-p="haunch">
                <path d="M80.0 204.0Q75.1 194.9 85.7 189.9Q88.4 180.2 100.7 181.2Q110.0 174.6 119.3 181.2Q131.6 180.2 134.3 189.9Q144.9 194.9 140.0 204.0Q144.9 213.1 134.3 218.1Q131.6 227.8 119.3 226.8Q110.0 233.4 100.7 226.8Q88.4 227.8 85.7 218.1Q75.1 213.1 80.0 204.0Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                <path d="M112 214 C126 212 142 214 146 221 C148 226 144 229 136 229 L116 229 C108 229 104 224 106 219 Z" fill="#f2be6b" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" />
                <path d="M132 222v5M139 222v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              </g>

              {/* Front Paws Sitting upright */}
              <g transform="translate(182 192)">
                <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14Z" fill="#f2be6b" />
                <path d="M-12 -14 C-12 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 12 4 12 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
                <path d="M-3.5 27 v5 M4.5 27 v5" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              </g>
              <g transform="translate(156 190)">
                <path d="M-11 -14 C-11 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 11 4 11 -14Z" fill="#e4a352" />
                <path d="M-11 -14 C-11 4 -12 16 -12 25 C-12 32 -7 34 0 34 C9 34 13 31 13 25 C13 16 11 4 11 -14" stroke="#2a170e" strokeWidth="3.4" strokeLinejoin="round" strokeLinecap="round" fill="none" />
              </g>
            </g>
          )}

          {/* Head Group (Round Fluffy Apricot Poodle / Teddy Head) */}
          <g
            data-p="head"
            transform={
              state === 'peeking'
                ? 'translate(-10 32)'
                : state === 'basket'
                ? 'translate(-6 22)'
                : 'translate(-10 -6)'
            }
          >
            {/* Red Toffee Collar & Gold Medallion Bell */}
            {state !== 'peeking' && (
              <g>
                <path d="M178 146 Q212 162 246 146 L246 154 Q212 170 178 154 Z" fill="#a24a1a" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
                <path d="M212 160 C212 156 206 155 206 159.4 C206 163 212 166.6 212 168.4 C212 166.6 218 163 218 159.4 C218 155 212 156 212 160 Z" fill="#fbe3b4" stroke="#2a170e" strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" />
              </g>
            )}

            {/* Left Fluffy Floppy Ear */}
            <g className="pup-ears-anim">
              <path
                data-p="earL"
                d="M177.1 78.7Q186.9 70.8 186.6 87.4Q196.0 89.9 189.9 105.5Q195.2 117.3 185.5 126.0Q184.7 142.8 175.2 141.2Q168.7 156.5 162.9 145.3Q153.1 153.2 153.4 136.6Q144.0 134.1 150.1 118.5Q144.8 106.7 154.5 98.0Q155.3 81.2 164.8 82.8Q171.3 67.5 177.1 78.7Z"
                fill="#e4a352"
                stroke="#2a170e"
                strokeWidth="3.4"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              {/* Right Fluffy Floppy Ear */}
              <path
                data-p="earR"
                d="M246.9 78.7Q252.7 67.5 259.2 82.8Q268.7 81.2 269.5 98.0Q279.2 106.7 273.9 118.5Q280.0 134.1 270.6 136.6Q270.9 153.2 261.1 145.3Q255.3 156.5 248.8 141.2Q239.3 142.8 238.5 126.0Q228.8 117.3 234.1 105.5Q228.0 89.9 237.4 87.4Q237.1 70.8 246.9 78.7Z"
                fill="#e4a352"
                stroke="#2a170e"
                strokeWidth="3.4"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </g>

            {/* Main Round Fluffy Teddy Head (Scalloped Cloud Contour - NO Lion Mane!) */}
            <path
              d="M212.0 54.0Q223.4 48.2 231.5 57.5Q244.5 56.1 248.1 67.5Q260.7 70.7 259.1 82.4Q269.4 89.7 263.0 100.0Q269.4 110.3 259.1 117.6Q260.7 129.3 248.1 132.5Q244.5 143.9 231.5 142.5Q223.4 151.8 212.0 146.0Q200.6 151.8 192.5 142.5Q179.5 143.9 175.9 132.5Q163.3 129.3 164.9 117.6Q154.6 110.3 161.0 100.0Q154.6 89.7 164.9 82.4Q163.3 70.7 175.9 67.5Q179.5 56.1 192.5 57.5Q200.6 48.2 212.0 54.0Z"
              fill="#f2be6b"
              stroke="#2a170e"
              strokeWidth="3.4"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {/* Fluffy Curly Topknot */}
            <path
              d="M195.0 52.0Q190.7 45.8 200.0 43.5Q203.2 36.9 212.0 40.0Q220.8 36.9 224.0 43.5Q233.3 45.8 229.0 52.0Q233.3 58.2 224.0 60.5Q220.8 67.1 212.0 64.0Q203.2 67.1 200.0 60.5Q190.7 58.2 195.0 52.0Z"
              fill="#f2be6b"
              stroke="#2a170e"
              strokeWidth="3.4"
              strokeLinejoin="round"
              strokeLinecap="round"
            />

            {/* Soft Cream Muzzle Snout */}
            <path d="M188 120 C188 106 200 100 212 100 C224 100 236 106 236 120 C236 133 225 140 212 140 C199 140 188 133 188 120 Z" fill="#fbe3b4" />

            {/* Cute Rosy Cheeks */}
            <circle cx="181" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />
            <circle cx="243" cy="116" r="7" fill="#f9b9a6" opacity="0.85" />

            {/* Eyes (Large puppy eyes with light highlights & blink) */}
            <g className="pup-eyes-blink">
              <ellipse cx="194" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
              <ellipse cx="230" cy="98" rx="7.4" ry="8.6" fill="#2a170e" />
              <circle cx="196.6" cy="94.6" r="2.7" fill="#ffffff" />
              <circle cx="232.6" cy="94.6" r="2.7" fill="#ffffff" />
              <circle cx="192" cy="101.2" r="1.2" fill="#ffffff" />
              <circle cx="228" cy="101.2" r="1.2" fill="#ffffff" />
            </g>

            {/* Dark button nose */}
            <path d="M204.5 111.5 Q212 107.2 219.5 111.5 Q218.2 118.4 212 120 Q205.8 118.4 204.5 111.5 Z" fill="#2a170e" />

            {/* Smile line */}
            <path d="M212 120 V124.5 M212 124.5 Q207.2 129.6 202.8 125.2 M212 124.5 Q216.8 129.6 221.2 125.2" stroke="#2a170e" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" fill="none" />

            {/* Cute pink tongue */}
            <path d="M207.6 127.4 Q212 136.6 216.4 127.4 Z" fill="#e98c8c" stroke="#2a170e" strokeWidth="2.2" strokeLinejoin="round" />

            {/* Paws peeking over edge in peeking state */}
            {state === 'peeking' && (
              <g transform="translate(0 20)">
                <ellipse cx="188" cy="148" rx="12" ry="9" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" />
                <ellipse cx="236" cy="148" rx="12" ry="9" fill="#f2be6b" stroke="#2a170e" strokeWidth="3" />
              </g>
            )}
          </g>
        </g>
      </svg>
    </div>
  );
}
