import { Box, makeStyles } from "@material-ui/core";
import { themeBaseStyles } from "../../styles";
import analiseEmArvore1Img from "../../img/analiseEmArvore1.png";
import analiseEmArvore2Img from "../../img/analiseEmArvore2.png";
import Math from "../../ImdCommons/Math";
import { mergeSortRecorrencia } from "../../formulas";

const useStyles = makeStyles((theme, props) => ({
  ...themeBaseStyles(theme, props),
  topico: {
    fontSize: '3em',
    marginBottom: '1em'
  }
}));


export default function MergeSortAnaliseEmArvore(props) {  
  const classes = useStyles(props);
  return (
    <>
      <Box display="flex"
          className={classes.root}
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly">
        <Box className={classes.formula} style={{fontSize: "2em"}}>
          <Math tex={mergeSortRecorrencia}/><span className={classes.danger}><Math tex={String.raw`\implies c=1`}/></span>
        </Box>
        <Box width="50%">
          <img src={analiseEmArvore1Img} alt="Representação da análise em árvore." width="100%" />
        </Box>
      </Box>
    </>
  );
}

export function MergeSortAnaliseEmArvore2(props) {  
  const classes = useStyles(props);
  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-evenly">
      <Box width="50%">
        <img src={analiseEmArvore2Img} alt="Representação da análise em árvore." width="100%" />
      </Box>
      <Box className={classes.formula} style={{fontSize: "2em"}}>
        <Math tex={String.raw`\begin{split}
            Total & = c \cdot n \cdot \log_2{n} + c \cdot n, c = 1 \\
            & = n \cdot \log_2{n} + n \\
            & \in \Theta(n \cdot \log{n})
          \end{split}`}/>
      </Box>
    </Box>
  );
}