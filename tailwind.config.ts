import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#2a170e',
          gold: '#f2be6b',
          amber: '#e4a352',
          cream: '#fffdf8',
          sand: '#fbe3b4',
          blush: '#f9b9a6',
          rose: '#e98c8c',
          rust: '#c2622b',
          rustDark: '#a24a1a',
          deep: '#6b2a1c',
        },
        scene: {
          1: { from: '#fffdf8', to: '#fff1d8' },
          2: { from: '#fff1d8', to: '#fbe3b4' },
          3: { from: '#fbe3b4', to: '#f7d18d' },
          4: { from: '#f7d18d', to: '#f0b866' },
          5: { from: '#f0b866', to: '#a65a30' },
          6: { from: '#a65a30', to: '#4d2b19' },
          7: { from: '#4d2b19', to: '#2f1a10' },
          8: { from: '#2f1a10', to: '#24130b' },
        },
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        sans: ['var(--font-figtree)', 'sans-serif'],
        hand: ['var(--font-shantell)', 'cursive'],
      },
      backgroundImage: {
        'scene-1': 'linear-gradient(180deg, #fffdf8 0%, #fff1d8 100%)',
        'scene-2': 'linear-gradient(180deg, #fff1d8 0%, #fbe3b4 100%)',
        'scene-3': 'linear-gradient(180deg, #fbe3b4 0%, #f7d18d 100%)',
        'scene-4': 'linear-gradient(180deg, #f7d18d 0%, #f0b866 100%)',
        'scene-5': 'linear-gradient(180deg, #f0b866 0%, #a65a30 100%)',
        'scene-6': 'linear-gradient(180deg, #a65a30 0%, #4d2b19 100%)',
        'scene-7': 'linear-gradient(180deg, #4d2b19 0%, #2f1a10 100%)',
        'scene-8': 'linear-gradient(180deg, #2f1a10 0%, #24130b 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        wag: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-10deg)' },
          '75%': { transform: 'rotate(10deg)' },
        },
        blink: {
          '0%, 90%, 100%': { opacity: '1' },
          '95%': { opacity: '0.2' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        wag: 'wag 0.8s ease-in-out infinite',
        blink: 'blink 4s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
