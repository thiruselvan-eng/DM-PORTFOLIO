/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B1020',
        card: '#11182A',
        'card-hover': '#162038',
        accent: {
          DEFAULT: '#A3E635',
          hover: '#BEF264',
          glow: 'rgba(163, 230, 53, 0.15)',
        },
        muted: '#A7B0C4',
        border: '#1E293B',
        'border-light': '#2D3A54',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-lime': '0 0 30px -5px rgba(163, 230, 53, 0.25)',
        'glow-subtle': '0 0 40px -10px rgba(56, 189, 248, 0.1)',
        'card-hover': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(163, 230, 53, 0.2)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
