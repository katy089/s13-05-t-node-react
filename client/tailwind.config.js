/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // sm: '480px',
      // md: '768px',
      // lg: '976px',
      // xl: '1440px',
    },
    extend: {
      spacing: {
        // '128': '32rem',
        // '144': '36rem',
      },
      borderRadius: {
        // '4xl': '2rem',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primario': '#bb7ebc',//medio
        'secundario': '#6c2b6d',//oscuro
        'terciario': '#d7b4d8',//claro
        'clearGray': '#0404046b'
      },
      textUnderlineOffset: {
        3: '3px',
      }

    },
  },


  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
};
