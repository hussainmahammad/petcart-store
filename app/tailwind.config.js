/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#FAF7F2",
        brand: "#E67E22",
        charcoal: "#2C2C2C",
        dim: "#6F6F6F",
        card: "#F1ECE6",
        accent: "#4CAF50",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        '2xl': "1rem",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // 🔥 enables prose styling
  ],
}
