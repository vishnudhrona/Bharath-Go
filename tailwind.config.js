/** @type {import('tailwindcss').Config} */
export default {
  content: [  
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      screens: {
        'lgProduct' : '1280px',
        'mdProduct' : '940px'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

