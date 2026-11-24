'use client';

import { useEffect, useState } from 'react';

interface TrailPaw {
  id: number;
  x: number;
  y: number;
  rotation: number;
}

export function PawTrailCanvas() {
  const [paws, setPaws] = useState<TrailPaw[]>([]);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let counter = 0;
    let isLeft = false;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.hypot(dx, dy);

      // Drop a paw print every 48px of mouse movement
      if (dist > 48) {
        lastX = e.clientX;
        lastY = e.clientY;

        // Angle in radians and degrees
        const angleRad = Math.atan2(dy, dx);
        const angleDeg = (angleRad * 180) / Math.PI + 90;

        // Perpendicular offset for alternating left/right walking paws
        isLeft = !isLeft;
        const offset = isLeft ? -8 : 8;
        const perpX = Math.cos(angleRad + Math.PI / 2) * offset;
        const perpY = Math.sin(angleRad + Math.PI / 2) * offset;

        const newPaw: TrailPaw = {
          id: counter++,
          x: e.clientX + perpX,
          y: e.clientY + perpY,
          rotation: angleDeg,
        };

        setPaws((prev) => [...prev.slice(-16), newPaw]);

        // Auto remove after fade out duration (1.2s)
        setTimeout(() => {
          setPaws((prev) => prev.filter((p) => p.id !== newPaw.id));
        }, 1200);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      {paws.map((paw) => (
        <div
          key={paw.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 select-none animate-paw-fade"
          style={{
            left: `${paw.x}px`,
            top: `${paw.y}px`,
            transform: `translate(-50%, -50%) rotate(${paw.rotation}deg)`,
          }}
        >
          {/* Small Brown SVG Paw Print */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 64 64"
            className="w-4 h-4"
          >
            <path
              transform="rotate(-18 32 34)"
              fill="#a24a1a"
              stroke="#2a170e"
              strokeWidth="2.8"
              strokeLinejoin="round"
              d="M32 30.5c-7.6 0-15.6 8.3-15.6 15.5 0 5.4 4.2 8.3 9.2 8.3 2.6 0 4.5-1.1 6.4-1.1s3.8 1.1 6.4 1.1c5 0 9.2-2.9 9.2-8.3 0-7.2-8-15.5-15.6-15.5zM19.28 26.71C21.07 30.08 20.42 33.92 17.84 35.29C15.25 36.67 11.71 35.05 9.92 31.69C8.13 28.32 8.78 24.48 11.36 23.11C13.95 21.73 17.49 23.35 19.28 26.71ZM29.62 15.64C30.32 19.62 28.46 23.26 25.47 23.79C22.48 24.32 19.48 21.53 18.78 17.56C18.08 13.58 19.94 9.94 22.93 9.41C25.92 8.88 28.92 11.67 29.62 15.64ZM45.22 17.56C44.52 21.53 41.52 24.32 38.53 23.79C35.54 23.26 33.68 19.62 34.38 15.64C35.08 11.67 38.08 8.88 41.07 9.41C44.06 9.94 45.92 13.58 45.22 17.56ZM54.08 31.69C52.29 35.05 48.75 36.67 46.16 35.29C43.58 33.92 42.93 30.08 44.72 26.71C46.51 23.35 50.05 21.73 52.64 23.11C55.22 24.48 55.87 28.32 54.08 31.69Z"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
