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
        energyYellow: '#F9DF5E',
        halfColonialWhite: '#FDF8D5',
        ivory: '#FFFFF4',
        tuatara: "#30302C"
      },
      fontFamily: {
        title: 'Mint Grotesk',
        body: 'Victor Mono'
      }
    },
  },
  plugins: [],
} satisfies Config