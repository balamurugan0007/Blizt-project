/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      ["inter"]:['Inter'],
      ['poppins']:['Poppins'],
      ['lora']:['Lora'],
      ['dm']:["DM+Sans"],
      ['os']:['Oswald'],
      ['roboto']:['Roboto']
    },
    extend: {},
  },
  plugins: [],
}

