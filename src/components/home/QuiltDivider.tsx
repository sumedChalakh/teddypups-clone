import React from 'react';

interface QuiltDividerProps {
  fillColor?: string;
  className?: string;
  inverted?: boolean;
}

export function QuiltDivider({
  fillColor = '#fbe3b4',
  className = '',
  inverted = false,
}: QuiltDividerProps) {
  const patternId = `scallop-${fillColor.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <div
      className={`w-full overflow-hidden leading-none z-10 ${
        inverted ? 'rotate-180 -mt-1' : '-mb-1'
      } ${className}`}
      aria-hidden="true"
    >
      <svg
        className="w-full h-8 sm:h-10 block"
        preserveAspectRatio="none"
        viewBox="0 0 1000 40"
      >
        <defs>
          <pattern
            id={patternId}
            width="76"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 40V27A38 25 0 0 1 76 27V40Z"
              fill={fillColor}
            />
            <path
              d="M0 27A38 25 0 0 1 76 27"
              fill="none"
              stroke="#2a170e"
              strokeWidth="2.5"
            />
            <path
              d="M11 33A27 19 0 0 1 65 33"
              fill="none"
              stroke="#2a170e"
              strokeWidth="1.4"
              strokeDasharray="3.5 5"
              strokeLinecap="round"
              opacity="0.38"
            />
          </pattern>
        </defs>
        <rect width="100%" height="40" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}
