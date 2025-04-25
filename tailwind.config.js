/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#f0f7fe',
          100: '#dcedfc',
          200: '#c0dffb',
          300: '#95caf8',
          400: '#63acf2',
          500: '#0e65a3', // основной цвет
          600: '#0c5489',
          700: '#0b4674',
          800: '#093a61',
          900: '#082f4e',
        },
        secondary: {
          50: '#fffaee',
          100: '#fff3d6',
          200: '#ffe6ad',
          300: '#fed683',
          400: '#f9b734', // основной цвет
          500: '#f9b734',
          600: '#e29d19',
          700: '#bd7f12',
          800: '#9a6414',
          900: '#805315',
        },
        neutral: {
          light: '#f9fafb',
          DEFAULT: '#f3f4f6',
          dark: '#1f2937',
        },
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
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