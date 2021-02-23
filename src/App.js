import './App.css';
import { Box, Deck, FlexBox, FullScreen, Progress } from 'spectacle';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import Slides from './Slides';
import MathJax from '@innodoc/react-mathjax-node';
import { BrowserRouter as Router } from 'react-router-dom';

const spectacleTheme = {
  colors: {
    primary: '#505050',
    secondary: 'rgb(37,88,151)',
    backgroundColor: 'white'
  },
  fonts: {
    header: '"Source Sans Pro", Helvetica, sans-serif',
    text: '"Source Sans Pro", Helvetica, sans-serif'
  }
};

const theme = createMuiTheme({
  palette: {
    primary: {
      main: spectacleTheme.colors.primary,
      light: 'rgb(132,132,132)'
    },
    secondary: {
      main: spectacleTheme.colors.secondary,
      light: 'rgb(124,154,192)',
    },
    emphasis: {
      main: 'red'
    }
  },
  typography: {
    fontFamily: spectacleTheme.fonts.text
  },
});



const template = () => (
  <FlexBox
    justifyContent="space-between"
    position="absolute"
    bottom={0}
    width={1}
  >
    <Box padding="0 1em">
      <FullScreen />
    </Box>
    <Box padding="1em">
      <Progress color={spectacleTheme.colors.primary} />
    </Box>
  </FlexBox>
);


function App() {
  return (
    <>
        <ThemeProvider theme={theme}>
          <MathJax.ConfigProvider options={{
            tex: {
              packages: {'[+]': ['mathtools']}
            }
          }}>
            <Deck theme={spectacleTheme} template={template}>
              <Slides/>
            </Deck>
          </MathJax.ConfigProvider>
        </ThemeProvider>
    </>
  );
}

export default App;
