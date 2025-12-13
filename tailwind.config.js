/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fffbf0',
          100: '#fff4d6',
          200: '#ffe6a3',
          300: '#ffd266',
          400: '#ffb91a',
          500: '#f59e0b', // Base gold (amber-500)
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
          metallic: '#D4AF37',
        },
        dark: {
          900: '#0a0a0a',
          800: '#121212',
          700: '#1c1c1c',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gold-gradient': 'linear-gradient(135deg, #F59E0B 0%, #D4AF37 100%)',
        'dark-gradient': 'linear-gradient(to bottom, #0a0a0a, #000000)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      animation: {
        'fade-in': 'fade-in 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      }
    }
  },
  plugins: [],
}