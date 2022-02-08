module.exports = {
  content: [
    "./app/**/*.{ts,tsx,jsx,js}",
    // "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}", // path to vechaiui
  ],
  theme: {
    extend: {
    }
  },
  variants: {},
  plugins: [
    require("@tailwindcss/forms"),
  ],
}; 