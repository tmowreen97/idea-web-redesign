/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0 8px 16px var(--tw-shadow-color)',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }  
        },

      },
      colors:{
        primary: '#f9f6f4',
        secondary: '#aabcb5',
        nav_bar: '#919d99',
        footer_bg: '#919d99',
        purple_accent:'#af79d9',
        purple_accent_2:'#cdaaec',
        dark_red: '#2E3A19',
        light_text: '#fdf4eb',
        accent_bg: '#6c8a7e',
        dark_shadow: '#303D38',
        button_bg: '#d15f3c',
        button_shadow: '#e97451',
        nav_bar_highlight: '#FFBD5E',
        border: '#747d7a',
        
        // button_bg : '#8dedd0',
        primary_text : '#323b1e',
        // #2E3A19
        // primary_text : '#FFFFF2',
        dark_text: '#1D2115',
        // dark_text: '#070706',
        accent_4: '#498767',

      },
      fontFamily: {
        sans: ['var(--font-urbanist)'],
      },
      animation:{
        wiggle: 'wiggle 2s ease-in-out infinite',
        // 'bounce-slow': 'bounce 2s ease-in-out infinite',
        pulsing: 'pulsing 2s ease-in-out infinite',
        typing: "typing 3s steps(20)  alternate, blink .7s 8 "
      }
    },
  },
  plugins: [
    // require('flowbite/plugin')
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
