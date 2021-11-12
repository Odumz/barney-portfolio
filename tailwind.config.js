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
    extend: {
      textColor: {
        skin: {
          base: withOpacity('--color-text-base'),
          muted: withOpacity('--color-text-muted'),
          inverted: withOpacity('--color-text-inverted'),
          primary: withOpacity('--color-primary'),
          secondary: withOpacity('--color-secondary'),
          'secondary-accent': withOpacity('--color-secondary-accent'),
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
      backgroundColor: {
        skin: {
          primary: withOpacity('--color-primary'),
          'button-accent': withOpacity('--color-button-accent'),
          'button-accent-hover': withOpacity('--color-button-accent-hover'),
          'button-muted': withOpacity('--color-button-muted'),
          secondary: withOpacity('--color-secondary'),
          'secondary-accent': withOpacity('--color-secondary-accent'),
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
