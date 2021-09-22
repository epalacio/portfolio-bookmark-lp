module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'royalBlue': '#5267df',
        'carnation': '#fa5959',
        'valhalla': '#242a45',
        'graySuit': '#9194a2',
        'linkWater': '#dbdff5',
        'blackHaze': '#f7f7f7',
        'white': '#ffffff'
      },
      fontSize: {
        'headerDesktop': '48px',
        'headerMobile': '30px',
        'subHeaderDesktop': '32px',
        'subHeaderMobile': '24px',
        'contentHeader': '16px',
        'textDesktop': '18px',
        'textMobile': '15px',
        'textCTA': '14px'
      },
      maxWidth: {
        'imgWidthMobile': '313px',
        'heroImgWidthDesktop': '580px',
        'featureImgWidthDesktop': '536px'
      },
      minWidth: {
        'ctaWidth': '154px'
      },
      zIndex: {
        '-10': '-10',
       }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
