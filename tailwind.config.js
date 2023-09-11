/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens : {
      '3xs': '330px',
      '2xs': '390px',
      xs: '500px',
      sm: '640px',
      md: '768px',
      'md-max': {max:'767px'},
      lg: '1024px',
      'lg-max': {max:'1023px'},
      xl: '1200px',
      'xl-max': {max:'1199px'},
      '2xl': '1440px',
      '3xl': '1536px'
    },
    fontSize : {
      xs:   ['12px', { lineHeight: '22px'}],
      sm:   ['14px', { lineHeight: '24px'}],
      base: ['16px', { lineHeight: '24px'}],
      lg:   ['18px', { lineHeight: '28px'}],
      xl:   ['20px', { lineHeight: '28px'}],
      '1.5xl' : ['22px', { lineHeight: '26px'}],
      '2xl':['24px', { lineHeight: '32px'}],
      '2.5xl' : ['28px', { lineHeight: '34px'}],
      '3xl':['30px', { lineHeight: '36px'}],
      '4xl':['36px', { lineHeight: '40px'}],
      '5xl':['48px', { lineHeight: '54px'}],
      '6xl':['52px', { lineHeight: '58px'}],
      '7xl':['62px', { lineHeight: '68px'}],
      'custom': ['44px', { lineHeight: '58px'}],
    },
    container : {
      center : true,
      padding : {
        DEFAULT: '16px',
        md: '24px',
        xl: '32px'
      }
    },
    fontFamily : {
      default : ['Poppins','sans-serif'],
      'h1': ['Sora','sans-seri'],
      date : ['Inter','sans-serif']
    },
    extend: {
      colors : {
        primary: '#6347F9',
        backgroud: '#FFF4F4',
        white : '#fff',
        black: '#000',
        text: '#777781',
        'text-2': '#657280',
        heading: '#1F3347',
        'heading-2':'#263E56',
        'heading-3': '#304050',
        'nav': '#354657',
        'hover-nav': '#23364A',
        'date': '#7D7E87',
        'plahoder': '#B7B9BC',
      },
      maxWidth : {
        md: '704px',
        lg: '925px',
        xl: '1192px',
        '561' : '561px',
        '537': '537px',
        '490' : '490px',
        '450' : '450px',
        '415' : '415px',
        '356' : '356px',
        '267' : '267px',
        '240' : '240px',
        '175' : '175px',
        '95' : '95%',
        '85' : '85%',
        '75' : '75%',
        '65': '65%',
        '40': '40%',
        '20': '20%'
      }
    },
  },
  plugins: [],
}

