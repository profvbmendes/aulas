import { Box, makeStyles, Typography } from "@material-ui/core";
import Math from "../../../ImdCommons/Math";
import { themeBaseStyles } from "../../../styles";
import provaMetodoMestre from "../../../img/provaMetodoMestre.png";
import {mergeSortRecorrencia} from "../../../formulas"; 
import { useSteps } from "spectacle/es/hooks/use-steps";

const useStyles = makeStyles((theme, props) => ({
  ...themeBaseStyles(theme, props),
  topico: {
    fontSize: '2em',
    textAlign: 'center'
  }
}));

export default function MetodoMestre(props) {  
  const classes = useStyles(props);
  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly">
      <Typography className={classes.topico}>Possibilita resolver recorrências da forma <Math tex={String.raw`T(n) = a \cdot T(n/b) + f(n)`}/>.</Typography>
      <Typography className={classes.topico}><span className={classes.emphasis}><Math tex={String.raw`a \geqslant 1`}/></span>, <span className={classes.emphasis}><Math tex={String.raw`b > 1`}/></span> e <span className={classes.emphasis}><Math tex={String.raw`f`}/></span> assintoticamente positiva.</Typography>
      <Typography className={classes.topico}><span className={classes.emphasis}><Math tex={String.raw`f(n)`}/></span> é o tempo para dividir o problema e combinar seus resultados.</Typography>
    </Box>
  );
}


export function MetodoMestreCasos(props) {  
  const classes = useStyles(props);
  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly">
      <Typography className={classes.topico}><strong>Caso 1: </strong>Se <span className={classes.emphasis}><Math tex={String.raw`f(n) = O(n^{\log_b{a-\varepsilon}})`}/></span> para <Math tex={String.raw`\varepsilon > 0`}/>, então <span className={classes.emphasis}><Math tex={String.raw`T(n) = \Theta(n^{\log_b{a}})`}/></span>.</Typography>
      <Typography className={classes.topico}><strong>Caso 2: </strong>Se <span className={classes.emphasis}><Math tex={String.raw`f(n) = \Theta(n^{\log_b{a}})`}/></span> então <span className={classes.emphasis}><Math tex={String.raw`T(n) = \Theta(n^{\log_b{a}} \cdot \log{n})`}/></span>.</Typography>
      <Typography className={classes.topico}><strong>Caso 3: </strong>Se <span className={classes.emphasis}><Math tex={String.raw`f(n) = \Omega(n^{\log_b{a+\varepsilon}})`}/></span> para <Math tex={String.raw`\varepsilon > 0`}/> e se <Math tex={String.raw`a \cdot f(n/b) \leqslant c \cdot f(n)`}/> para <Math tex={String.raw`c < 1`}/> para n suficientemente grande, então <span className={classes.emphasis}><Math tex={String.raw`T(n) = \Theta(n^{\log_b{a}})`}/></span>.</Typography>
    </Box>
  );
}


export function MetodoMestreMergeSort(props) {  
  const {step, placeholder: stepPlaceholder} = useSteps(7, {});
  const classes = useStyles(props);
  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly">
      {stepPlaceholder}
      <Typography className={classes.topico}><Math tex={mergeSortRecorrencia}/></Typography>
      { step >= 0 && <Typography className={classes.topico}>É da forma <Math tex={String.raw`T(n) = a \cdot T(n/b) + f(n)`}/>? Quais os valores de <Math tex={String.raw`a`}/>, <Math tex={String.raw`b`}/> e <Math tex={String.raw`f(n)`}/>?</Typography> }
      { step >= 1 && <Typography className={classes.topico}><Math tex={String.raw`a = 2, b = 2, f(n) = n`}/>.</Typography> }
      { step >= 2 && <Typography className={classes.topico}><strong>Caso 1: </strong><Math tex={String.raw`f(n) = O(n^{\log_2{2-\varepsilon}})`}/>? { step >= 3 && <span class={classes.danger}>Não</span> }</Typography> }
      { step >= 4 && <Typography className={classes.topico}><strong>Caso 2: </strong><Math tex={String.raw`f(n) = \Theta(n^{\log_2{2}})`}/>? { step >= 5 && <span class={classes.ok}>Sim</span> }</Typography> }
      { step >= 6 && <Typography className={classes.topico}>Então <Math tex={String.raw`T(n) \in \Theta(n^{\log_2{2}} \cdot \log{n} ) = \Theta(n \cdot \log{n})`}/></Typography> }
    </Box>
  );
}

export function MetodoMestreArvore(props) {  
  const classes = useStyles(props);
  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-evenly">
      <Box width="70%">
        <img src={provaMetodoMestre} alt="Representação da análise em árvore." width="100%" />
      </Box>
      <Box display="flex"
          style={{height: '100%'}}
          flexDirection="column"
          alignItems="start"
          justifyContent="center">
        <Box style={{fontSize: '1.5em', margin: '1em'}}>Cada nó se divide em outros <span className={classes.emphasis}><Math tex={String.raw`a`}/></span> nós</Box>
        <Box style={{fontSize: '1.5em', margin: '1em'}}><span className={classes.emphasis}><Math tex={String.raw`\log_b{n}`}/></span> níveis</Box>
        <Box style={{fontSize: '1.5em', margin: '1em'}}><span className={classes.emphasis}><Math tex={String.raw`a^{\log_b{n}} = n^{\log_b{a}}`}/></span> folhas</Box>
        <Box style={{fontSize: '1.5em', margin: '1em'}}>Se dividirmos a raiz, o meio da árvore e as folhas, temos:</Box>
        <Box style={{fontSize: '1.5em', margin: '1em'}}><span className={classes.emphasis}><Math tex={String.raw`\Theta(n^{\log_b{a}}) + \sum_{j=1}^{\log_b{n-1}} a^j \cdot f(n/b^j) + f(n)`}/></span></Box>
      </Box>
    </Box>
  );
}
/*
4.3-1
Use the master method to give tight asymptotic bounds for the following recurrences.
a. T (n) = 4T (n/2) + n.
b. T (n) = 4T (n/2) + n2.
c. T (n) = 4T (n/2) + n3.*/