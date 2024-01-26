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
        primary: '#025138',
        secondary: '#237059',
        tertiary : '#042a2c',
        dark_bg: '#021C15',
        footer_bg: '#0D352B',
        red_text: '#F44336',
        red_heading: '#DB4859',
        red_accent_2: '#F25C5C',
        dark_red: '#660000',
        beige_text: '#fce5cd',
        // dark_red: '#602020',
// #7FFFD4
        button_bg: '#42A26C',
        button_bg_2: '#86DA96',
        accent_3: '#63a081',
        accent_4: '#498767',
        // button_bg : '#8dedd0',
        primary_text : '#FFFFF2',
        dark_text: '#070706',

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
