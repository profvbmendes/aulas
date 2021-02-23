import { Box, makeStyles, Typography } from "@material-ui/core";
import { themeBaseStyles } from "../../../styles";
import analiseEmArvore1Img from "../../../img/analiseEmArvore1.png";
import analiseEmArvore2Img from "../../../img/analiseEmArvore2.png";
import analiseEmArvore3Img from "../../../img/analiseEmArvore3.png";
import Math from "../../../ImdCommons/Math";
import { useSteps } from "spectacle/es/hooks/use-steps";

const useStyles = makeStyles((theme, props) => ({
  ...themeBaseStyles(theme, props),
  topico: {
    fontSize: '3em',
    marginBottom: '1em'
  }
}));

export default function AnaliseEmArvore(props) {  
  const classes = useStyles(props);
  return (
    <>
      <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly">
        <Typography className={classes.topico}>Representa em uma <span className={classes.emphasis}>árvore</span> o desenvolvimento da <span className={classes.emphasis}>recorrência</span>.</Typography>
        <Typography className={classes.topico}>Cada <span className={classes.emphasis}>nó</span> representa um <span className={classes.emphasis}>subproblema</span>.</Typography>
        <Typography className={classes.topico}>O <span className={classes.emphasis}>custo total</span> é a soma dos custos de cada nó.</Typography>
      </Box>
    </>
  );
}


export function AnaliseEmArvoreFormulas(props) {  
  const classes = useStyles(props);
  return (
    <>
      <Box display="flex"
          className={classes.root}
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly">
        <Box className={classes.formula} style={{fontSize: "2em"}}>
          <Math tex={String.raw`T(n) = \begin{cases}
                  c & \text{para $n = 1$}\\
                  2T(n/2) + cn & \text{para $n > 1$}
                \end{cases}`}/>
        </Box>
        <Box width="50%">
          <img src={analiseEmArvore1Img} alt="Representação da análise em árvore." width="100%" />
        </Box>
      </Box>
    </>
  );
}


export function AnaliseEmArvoreFormulas2(props) {  
  const classes = useStyles(props);
  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="row"
        alignItems="stretch"
        justifyContent="space-evenly">
      <Box width="50%">
        <img src={analiseEmArvore2Img} alt="Representação da análise em árvore." width="100%" />
      </Box>
      <Box display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly">
        <Box style={{fontSize: '2em'}}><Math tex={String.raw`\log_a{b} = x \iff a^x = b`}/></Box>
        <Box style={{fontSize: '2em'}}><Math tex={String.raw`\log_2{n} = h \iff 2^{h} = n`}/></Box>
      </Box>
    </Box>
  );
}

export function AnaliseEmArvoreExercicio(props) {  
  const classes = useStyles(props);
  const {step, placeholder: stepPlaceholder} = useSteps(1, {});
  return (
    <>
      {stepPlaceholder}
      <Box display="flex"
          className={classes.root}
          flexDirection="row"
          alignItems="center"
          justifyContent="space-evenly">
        { step < 0 &&
          <Box className={classes.formula} style={{fontSize: "2em"}}>
            <Typography style={{fontSize: '1em'}}>Verifique qual o limite superior O para <Math tex={String.raw`T(n) = T(n/3) + T(2n/3) + c \cdot n`}/>.</Typography>
          </Box>
        }
        {step >= 0 &&
          <>
            <Box className={classes.formula} style={{fontSize: "2em"}}>
              <Typography style={{fontSize: '1em'}}><Math tex={String.raw`T(n) = T(n/3) + T(2n/3) + c \cdot n`}/></Typography>
            </Box>
            <Box width="50%">
              <img src={analiseEmArvore3Img} alt="Representação da análise em árvore." width="100%" />
            </Box>
          </>
        }
      </Box>
    </>
  );
}