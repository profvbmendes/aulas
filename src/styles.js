export const baseStyles = {
  slideBox: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    alignItems: 'stretch'
  },
  slideContentColumnBox: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    alignItems: 'center'
  },
  slideContentRowBox: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'spaceBetween'
  },
  formula: {
    fontSize: '4em'
  },
  bullets: {
    fontSize: '2rem',
    listStyle: 'inherit',
    marginLeft: '2rem'
  },
  numbersOl: {
    fontSize: '2rem',
    listStyle: 'decimal',
    marginLeft: '2rem'
  },
  lowerRomanOl: {
    fontSize: '2rem',
    listStyle: 'lower-roman',
    marginLeft: '2rem'
  },
  hidden: {
    visibility: 'hidden'
  },
  root: {
    flexGrow: 1
  },
  topicoS1: {
    fontSize: '1.3em'
  },
  topicoS2: {
    fontSize: '2em'
  },
  topicoS3: {
    fontSize: '3em'
  }
};

export const themeBaseStyles = (theme, props) => ({
  ...baseStyles,
  emphasis: {
    color: theme.palette.secondary.main,
    fontWeight: 'bold'
  },
  danger: {
    color: 'red',
    fontWeight: 'bold'
  },
  ok: {
    color: 'green',
    fontWeight: 'bold'
  }
});