/** @type {import('tailwindcss').Config} */
export default {
  // Specify the files to watch for changes and apply styles to
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  // Define the theme settings, including colors, fonts, and screens
  theme: {
    colors: {
      'white': '#ffffff',
      'dark': '#121212',
      'yellow': '#ffd335',
    },
    fontFamily: {
      // Define custom fonts if needed
    },
    screens: {
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
    },
    container: {
      center: true,  // Center the container content
    },
  },

  // Add any additional plugins if required
  plugins: [],
}

