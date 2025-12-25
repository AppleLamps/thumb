/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#9333ea', // Purple
        secondary: '#ec4899', // Pink
        accent: '#f97316', // Orange
        background: '#ffffff', // White
        surface: 'rgba(0, 0, 0, 0.03)', // Light Glass
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #9333ea 0%, #ec4899 50%, #f97316 100%)',
        'gradient-button': 'linear-gradient(135deg, #ec4899 0%, #f97316 100%)',
      }
    },
  },
  plugins: [],
}
