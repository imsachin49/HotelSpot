/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        blink: ["BlinkMacSystemFont", "sans-serif"],
        candara: ["Candara", "sans-serif"],
      },
      boxShadow: {
        blurs: "0 8px 32px 0 rgba(31,38,135,.37)",
        sh1:'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
        sh2:'rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px'
      },
      backgroundColor: {
        'hsle':'hsla(0,0%,100%,.493)'
      },
      screens: {
        'xs':  '260px',
        'sm': '400px',
        'vsm': '540px',
        'md':  '768px',
        'lg':  '1024px',
        'vlg': '1060px',
        'xl':  '1280px',
        '2xl': '1440px',
      }
    },
  },
  plugins: [],
}
