/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c7ff',
          300: '#66abff',
          400: '#338fff',
          500: '#0073ff', // Primary blue
          600: '#005ccc',
          700: '#004599',
          800: '#002e66',
          900: '#001733',
        },
        'secondary': {
          50: '#e6fff6',
          100: '#ccffed',
          200: '#99ffdb',
          300: '#66ffc9',
          400: '#33ffb7',
          500: '#00ffa5', // Accent light green
          600: '#00cc84',
          700: '#009963',
          800: '#006642',
          900: '#003321',
        },
        'neutral-dark': '#1A202C',
        'neutral-light': '#F7FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 12px rgba(0, 115, 255, 0.15)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-bg.jpg')",
        'footer-texture': "url('/img/footer-bg.jpg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
} 