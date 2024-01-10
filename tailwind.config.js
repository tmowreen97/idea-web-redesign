/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },

      },
      colors:{
        primary: '#025138',
        secondary: '#237059',
        tertiary : '#042a2c',
        footer_bg: '#0D352B',
        // accent_1 : '#980000',
        red_accent: '#F14A4A',
        red_accent_2: '#F25C5C',
        button_bg_hover : '#6CB49C',
        button_bg: '#7FFFD4',
        accent_1: '#42A26C',
        accent_2: '#86DA96',
        // button_bg : '#8dedd0',
        primary_text : '#FFFFF2',
        secondary_text : '#FFFFF2',
        dark_text: '#070706',
      },
      fontFamily: {
        sans: ['var(--font-urbanist)'],
      },
      animation:{
        'wiggle': 'wiggle 2s ease-in-out infinite',
        // 'bounce-slow': 'bounce 2s ease-in-out infinite',
        'pulsing': 'pulsing 2s ease-in-out infinite'
      }
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}
