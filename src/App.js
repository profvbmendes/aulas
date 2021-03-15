import './App.css';
import { Box, Deck, FlexBox, FullScreen, Progress } from 'spectacle';
import { createMuiTheme, List, makeStyles, ThemeProvider } from '@material-ui/core';
import MathJax from '@innodoc/react-mathjax-node';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import SlidesAula05EDB2 from './Conteudo/edb2/aula-05/SlidesAula05EDB2';
import SlidesAula06EDB2 from './Conteudo/edb2/aula-06/SlidesAula06EDB2';
import SlidesAula05LP2 from './Conteudo/lp2/aula-05/SlidesAula05LP2';
import { SlidesAula07EDB2 } from './Conteudo/edb2/aula-07/SlidesAula07EDB2';
import ImdSlide from './ImdCommons/ImdSlide';
import { Topico } from './ImdCommons/SlideAgenda';
import { themeBaseStyles } from './styles';
import { SlidesAula08EDB2 } from './Conteudo/edb2/aula-08/SlidesAula08EDB2';
import { SlidesAula09EDB2 } from './Conteudo/edb2/aula-09-arvores-binarias/SlidesAula09EDB2';

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
    highlight: {
      main: 'rgb(37,151,88)',
    },
    emphasis: {
      main: 'red'
    },
    danger: {
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
    <Box padding="0 1em">
      <Progress color={spectacleTheme.colors.primary} />
    </Box>
  </FlexBox>
);


const useStyles = makeStyles((theme, props) => ({
  ...themeBaseStyles(theme, props)
}));

const aulas = [{
  path: "/edb2/aula-05",
  component: () => <SlidesAula05EDB2/>,
  title: "Aula 05 - Modelagem e solução de equações de recorrência"
},{
  path: "/edb2/aula-06",
  component: () => <SlidesAula06EDB2/>,
  title: "Aula 06 - Complexidade de Algoritmos vs Complexidade de Problemas"
},{
  path: "/edb2/aula-07",
  component: () => <SlidesAula07EDB2/>,
  title: "Aula 07 - Introdução a Árvores"
},{
  path: "/edb2/aula-08",
  component: () => <SlidesAula08EDB2/>,
  title: "Aula 08 - Árvores Binárias"
},{
  path: "/edb2/aula-09",
  component: () => <SlidesAula09EDB2/>,
  title: "Aula 09 - Árvores Binárias de Busca"
}];

function App(props) {
  const classes = useStyles(props);

  return (
    <>
        <ThemeProvider theme={theme}>
          <MathJax.ConfigProvider options={{
            tex: {
              packages: {'[+]': ['mathtools']}
            }
          }}>
            <Deck theme={spectacleTheme} template={template}>
              <Router>
                { aulas.map(aula => <Route path={aula.path}>{aula.component()}</Route>)}
                <Route path="/">
                  <ImdSlide heading="Aulas">
                    <List component="ul" className={classes.bullets}>
                      <Topico>IMD0039 - Estruturas de Dados Básicas 2
                        <List component="ol" className={classes.lowerRomanOl}>
                          {aulas.map(aula => <Topico><Link to={aula.path}>{aula.title}</Link></Topico>)}
                        </List>
                      </Topico>
                    </List>
                  </ImdSlide>
                  
                </Route>
              </Router>
            </Deck>
          </MathJax.ConfigProvider>
        </ThemeProvider>
    </>
  );
}

export default App;
