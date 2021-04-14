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
import { SlidesAula10EDB2 } from './Conteudo/edb2/aula-10-lista-de-prioridades/SlidesAula10EDB2';
import { SlidesAula11EDB2 } from './Conteudo/edb2/aula-11-conjuntos-disjuntos/SlidesAula11EDB2';
import { SlidesAula12EDB2 } from './Conteudo/edb2/aula-12-arvore-avl/SlidesAula12EDB2';
import { SlidesAula14EDB2 } from './Conteudo/edb2/aula-14-arvore-b-e-digitais/SlidesAula14EDB2';
import { SlidesAula13EDB2 } from './Conteudo/edb2/aula-13-arvore-rubro-negra/SlidesAula13EDB2';

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

const aulas1 = [{
  path: "/edb2/aula-05",
  component: () => <SlidesAula05EDB2/>,
  title: "Aula 05 - Modelagem e solução de equações de recorrência"
},{
  path: "/edb2/aula-06",
  component: () => <SlidesAula06EDB2/>,
  title: "Aula 06 - Complexidade de Algoritmos vs Complexidade de Problemas"
}];

const aulas2 = [{
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
},{
  path: "/edb2/aula-10",
  component: () => <SlidesAula10EDB2/>,
  title: "Aula 10 - Heap e heapsort"
},{
  path: "/edb2/aula-11",
  component: () => <SlidesAula11EDB2/>,
  title: "Aula 11 - Conjuntos disjuntos"
}];

const aulas3 = [{
  path: "/edb2/aula-12",
  component: () => <SlidesAula12EDB2/>,
  title: "Aula 12 - Árvore AVL"
},{
  path: "/edb2/aula-13",
  component: () => <SlidesAula13EDB2/>,
  title: "Aula 13 - Árvore Rubro-Negra"
},{
  path: "/edb2/aula-14",
  component: () => <SlidesAula14EDB2/>,
  title: "Aula 14 - Árvores B e digitais"
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
                { aulas1.map(aula => <Route path={aula.path}>{aula.component()}</Route>)}
                { aulas2.map(aula => <Route path={aula.path}>{aula.component()}</Route>)}
                { aulas3.map(aula => <Route path={aula.path}>{aula.component()}</Route>)}
                <Route path="/">
                  <ImdSlide heading="Aulas">
                    <List component="ul" className={classes.bullets}>
                      <Topico>IMD0039 - Estruturas de Dados Básicas 2 - Unidade 1
                        <List component="ol" className={classes.lowerRomanOl}>
                          {aulas1.map(aula => <Topico><Link to={aula.path}>{aula.title}</Link></Topico>)}
                        </List>
                      </Topico>
                    </List>
                  </ImdSlide>
                  <ImdSlide heading="Aulas">
                    <List component="ul" className={classes.bullets}>
                      <Topico>IMD0039 - Estruturas de Dados Básicas 2 - Unidade 2
                        <List component="ol" className={classes.lowerRomanOl}>
                          {aulas2.map(aula => <Topico><Link to={aula.path}>{aula.title}</Link></Topico>)}
                        </List>
                      </Topico>
                    </List>
                  </ImdSlide>
                  <ImdSlide heading="Aulas">
                    <List component="ul" className={classes.bullets}>
                      <Topico>IMD0039 - Estruturas de Dados Básicas 2 - Unidade 3
                        <List component="ol" className={classes.lowerRomanOl}>
                          {aulas3.map(aula => <Topico><Link to={aula.path}>{aula.title}</Link></Topico>)}
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
