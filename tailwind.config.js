function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !==undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`
    }
    return `rgb(var(${variableName}))`
  }
}

module.exports = {
  mode: 'jit',
  purge: ['./**/*.{vue, js, jsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      inset: {
       '1/5': '20%',
       '2/5': '40%',
       '3/5': '60%',
       '4/5': '80%',
       '1/6': '16.66666667%',
       '2/6': '33.33333333%',
       '3/6': '50%',
       '4/6': '66.66666667%',
       '5/6': '83.33333333%',
       '1/7': '14.2857143%',
       '2/7': '28.5714286%',
       '3/7': '42.8571429%',
       '4/7': '57.1428571%',
       '5/7': '71.4285714%',
       '6/7': '85.7142857%',
       '1/8': '12.50%',
       '2/8': '25%',
       '3/8': '37.50%',
       '4/8': '50%',
       '5/8': '62.50%',
       '6/8': '75%',
       '7/8': '87.50%',
       '1/9': '11.1111111%',
       '2/9': '22.2222222%',
       '3/9': '33.3333333%',
       '4/9': '44.4444444%',
       '5/9': '55.5555556%',
       '6/9': '66.6666667%',
       '7/9': '77.7777778%',
       '8/9': '88.8888889%',
       '1/10': '10%',
       '2/10': '20%',
       '3/10': '30%',
       '4/10': '40%',
       '5/10': '50%',
       '6/10': '60%',
       '7/10': '70%',
       '8/10': '80%',
       '9/10': '90%',
       '1/11': '9.0990901%',
       '2/11': '18.18181818%',
       '3/11': '27.27272727%',
       '4/11': '36.36363636%',
       '5/11': '45.45454545%',
       '6/11': '54.54545455%',
       '7/11': '63.63636364%',
       '8/11': '72.72727273%',
       '9/11': '81.81818182%',
       '10/11': '90.90909091%',
       '1/12': '8.333333333%',
       '2/12': '16.666666667%',
       '3/12': '25%',
       '4/12': '33.33333333%',
       '5/12': '41.66666667%',
       '6/12': '50%',
       '7/12': '58.33333333%',
       '8/12': '66.66666667%',
       '9/12': '75%',
       '10/12': '83.3333333%',
       '11/12': '91.6666667%',
       '18/21': '85.7142857%'
      },
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
          primary: withOpacity('--color-primary'),
          secondary: withOpacity('--color-secondary'),
          tertiary: withOpacity('--color-tertiary'),
          'secondary-accent': withOpacity('--color-secondary-accent'),
          'tertiary-accent': withOpacity('--color-tertiary-accent')
        }
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '1/8': '12.5%',
        '2/8': '25.0%',
        '3/8': '37.5%',
        '4/8': '50%',
        '5/8': '62.5%',
        '6/8': '75%',
        '7/8': '87.5%',
        '1/9': '11.111111111%',
        '2/9': '22.222222222%',
        '3/9': '33.333333333%',
        '4/9': '44.444444444%',
        '5/9': '55.555555556%',
        '6/9': '66.666666667%',
        '7/9': '77.777777778%',
        '8/9': '88.888888889%'
      },
      padding: {
        '70': '280px'
      },
      margin: {
        '70': '280px'
      },
      backgroundColor: {
        skin: {
          primary: withOpacity('--color-primary'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted'),
          secondary: withOpacity('--color-secondary'),
          tertiary: withOpacity('--color-tertiary'),
          'secondary-accent': withOpacity('--color-secondary-accent'),
          'tertiary-accent': withOpacity('--color-tertiary-accent'),
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
