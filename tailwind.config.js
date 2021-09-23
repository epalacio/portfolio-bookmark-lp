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
        'textCTA': '14px',
        'cardHeader': '20px'
      },
      screens: {
        'cards': '1040px'
      },
      maxWidth: {
        'imgWidthMobile': '313px',
        'heroImgWidthDesktop': '580px',
        'featureImgWidthDesktop': '536px',
        'cardWidth': '280px',
        'cardLogoWidth': '100px',
        'footerMobileWidth': '375px'
      },
      minWidth: {
        'ctaWidth': '154px',
        'cardWidth': '280px'
      },
      minHeight: {
        'cardHeight': '371px'
      },
      maxHeight: {
        'cardHeight': '371px'
      },
      zIndex: {
        '-10': '-10',
      },
      divideWidth: {
        '1': '1px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
