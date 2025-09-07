/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10b981',
        secondary: '#f59e0b',
        gray: {
          300: '#d1d5db',
          400: '#9ca3af',
        }
      },
    },
  },
  plugins: [],
}

