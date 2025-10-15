/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a1a1a",
        "background-light": "#ffffff",
        "background-dark": "#121212",
        "text-light": "#333333",
        "text-dark": "#e5e5e5",
        "accent-light": "#f5f5f5",
        "accent-dark": "#2a2a2a"
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        body: ["Montserrat", "sans-serif"],
      },
      borderRadius: {
        'DEFAULT': '0.25rem',
        'lg': '0.5rem',
      },
    },
  },
  plugins: [],
}



