/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#05060A',
          base: '#05060A',
          surface: '#0E1220',
          card: '#1A2234',
        },
        solar: {
          orange: '#E05624', // Premium Copper Orange
          yellow: '#F59E0B', // Amber Gold
          accent: '#D94E1B', // Darker Copper Accent
        },
        slate: {
          light: '#F3F4F6',
          dark: '#0F172A',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Outfit', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3rem',
      },
      transitionTimingFunction: {
        'magnetic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'bounce-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      }
    },
  },
  plugins: [],
}
