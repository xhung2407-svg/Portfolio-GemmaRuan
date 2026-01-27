/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        brandBlue: "#0047AB",
        facebook: "#1877F2",
        facebookDark: "#0d65d9",
        instagram: "#E4405F",
        instagramDark: "#d62946",
        linkedin: "#0077B5",
        linkedinDark: "#005e8f",
        "background-light": "#f6f7f8",
        "background-dark": "#111921",
        accent: "#ec4899",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "Manrope", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      borderRadius: {
        DEFAULT: "1rem",
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        floatUp: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 0.8s ease-out forwards',
        floatUp: 'floatUp 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
