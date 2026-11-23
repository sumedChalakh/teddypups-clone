'use client';

import { useEffect, useState } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
  rotation: number;
}

export function PawTrailCanvas() {
  const [points, setPoints] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let counter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.hypot(dx, dy);

      // Only drop a paw every 65px moved
      if (dist > 65) {
        lastX = e.clientX;
        lastY = e.clientY;
        const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90;
        const newPoint = {
          x: e.clientX,
          y: e.clientY + window.scrollY,
          id: counter++,
          rotation: angle,
        };

        setPoints((prev) => [...prev.slice(-12), newPoint]);

        // Auto remove point after 1.8s
        setTimeout(() => {
          setPoints((prev) => prev.filter((p) => p.id !== newPoint.id));
        }, 1800);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden" aria-hidden="true">
      {points.map((p) => (
        <span
          key={p.id}
          className="absolute -translate-x-1/2 -translate-y-1/2 text-teddy-rust/30 transition-opacity duration-1000 select-none animate-fade-out"
          style={{
            left: `${p.x}px`,
            top: `${p.y - (typeof window !== 'undefined' ? window.scrollY : 0)}px`,
            transform: `translate(-50%, -50%) rotate(${p.rotation}deg)`,
          }}
        >
          🐾
        </span>
      ))}
    </div>
  );
}
