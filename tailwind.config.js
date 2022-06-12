module.exports = {
  mode: 'jit',
  content: [
    "./app/**/*.{ts,tsx,jsx,js}",

    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}', // path to vechaiui
  ],
  plugins: [require('@tailwindcss/forms'), require('@vechaiui/core')],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
}
// module.exports = {
//   content: [
//     "./app/**/*.{ts,tsx,jsx,js}",
//     // "./node_modules/@vechaiui/**/*.{js,ts,jsx,tsx}", // path to vechaiui
//   ],
//   theme: {
//     extend: {
//     }
//   },
//   variants: {},
//   plugins: [
//     require("@tailwindcss/forms"),
//   ],
// }; 