import React from 'react';

interface QuiltDividerProps {
  fillColor: string; // The color of the scallop fill (matches the scene below)
  className?: string;
  inverted?: boolean;
}

export function QuiltDivider({
  fillColor,
  className = '',
  inverted = false,
}: QuiltDividerProps) {
  const patternId = `scallop-${fillColor.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <div
      className={`w-full overflow-hidden leading-none z-20 relative select-none pointer-events-none -my-0.5 ${className}`}
      aria-hidden="true"
    >
      <svg
        className={`w-full h-6 sm:h-8 block ${inverted ? 'rotate-180' : ''}`}
        preserveAspectRatio="none"
        viewBox="0 0 1000 32"
      >
        <defs>
          <pattern
            id={patternId}
            width="50"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            {/* Scallop Arch Fill */}
            <path
              d="M0 32V18 A25 18 0 0 1 50 18 V32 Z"
              fill={fillColor}
            />
            {/* Outer dark line */}
            <path
              d="M0 18 A25 18 0 0 1 50 18"
              fill="none"
              stroke="#2a170e"
              strokeWidth="2.5"
            />
            {/* Dashed hand-stitch line */}
            <path
              d="M8 22 A17 14 0 0 1 42 22"
              fill="none"
              stroke="#2a170e"
              strokeWidth="1.2"
              strokeDasharray="2.5 4"
              opacity="0.6"
            />
          </pattern>
        </defs>
        <rect width="1000" height="32" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
