/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: {
      colors:{
         primaryBlue:'#4262FF',
         specialBlack:'#050038',
         grayText:'rgba(5, 0, 56, 0.72)',
         borderColor:'#9B99AF'
      }
    },
  },
  plugins: [],
}

