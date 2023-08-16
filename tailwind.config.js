/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'dark': '#121212',
      'yellow': '#ffd335',
    },
    fontFamily: {
    },
    screens: {
      // sm: '480px',
      // md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}

