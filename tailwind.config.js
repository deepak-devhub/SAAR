/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffdf5',
          100: '#fffceb',
          200: '#fff7cc',
          300: '#ffefa8',
          400: '#ffd966',
          500: '#f4c430',
          600: '#d4af37',
          700: '#b8860b',
          800: '#9a7209',
          900: '#7d5e07',
        },
        gold: {
          50: '#fffdf5',
          100: '#fffceb',
          200: '#fff7cc',
          300: '#ffefa8',
          400: '#ffd966',
          500: '#f4c430',
          600: '#d4af37',
          700: '#b8860b',
          800: '#9a7209',
          900: '#7d5e07',
        },
        secondary: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
