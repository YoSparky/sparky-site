import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        botticelli: '#D6E7EC',
        energyYellow: '#F9DF5E',
        halfColonialWhite: '#FDF8D5',
        ivory: '#FFFFF4',
        logCabin: '#1D1D1A',
        tuatara: "#30302C",
        wattle: '#E0E34A'
      },
      fontFamily: {
        title: 'Mint Grotesk',
        body: 'Arnold'
      }
    },
  },
  plugins: [],
} satisfies Config