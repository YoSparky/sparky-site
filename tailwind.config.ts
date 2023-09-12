import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true
    },
    extend: {
      animation: {
        swing: 'swing 3s ease-in-out forwards',
        swingBack: 'swing 6s ease-in-out reverse forwards',
      },
      colors: {
        energyYellow: '#F9DF5E',
        halfColonialWhite: '#FDF8D5',
        ivory: '#FFFFF4'
      },
      keyframes: {
        swing: {
          '0%': { transform: 'rotate(40deg)' },
          '20%': { transform: 'rotate(120deg)' },
          '40%': { transform: 'rotate(60deg)' },
          '60%': { transform: 'rotate(100deg)' },
          '80%': { transform: 'rotate(80deg)' },
          '100%': { transform: 'rotate(90deg)' }
        }
      }
    },
  },
  plugins: [],
} satisfies Config