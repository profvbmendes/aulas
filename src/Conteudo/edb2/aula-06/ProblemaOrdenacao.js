import { Box, makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSteps } from "spectacle/es/hooks/use-steps";
import ImdComplexityTable from "../../../ImdCommons/ImdComplexityTable";
import Math from "../../../ImdCommons/Math";
import { themeBaseStyles } from "../../../styles";

const useStyles = makeStyles((theme, props) => ({
  ...themeBaseStyles(theme),
}));

export default function ProblemaOrdenacao(props) {
  const classes = useStyles(props);
  const {step, placeholder: stepPlaceholder}  = useSteps(2, {});

  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignContent="center"
        justifyContent="space-evenly">
      {stepPlaceholder}
      <ImdComplexityTable
        labels={['Pior caso']}
        cases={[{
          label: <>Ordenação por inserção (<i>Insert sort</i>)</>,
          complexities: [<Math tex={String.raw`O(n^2)`}/>]
        },{
          label: <>Ordenação por bolha (<i>Bubble sort</i>)</>,
          complexities: [<Math tex={String.raw`O(n^2)`}/>]
        },{
          label: <>Merge sort</>,
          complexities: [step >= 1 ? <span className={classes.emphasis}><Math tex={String.raw`O(n \cdot \log{n})`}/></span> : <Math tex={String.raw`O(n \cdot \log{n})`}/>]
        }]}/>
      { step >= 0 && <Typography className={classes.topicoS2} style={{textAlign: 'center'}}>Qual o <span className={classes.emphasis}>limite superior</span> da complexidade do <span className={classes.emphasis}>problema da ordenação</span>?</Typography> }
      { step >= 1 && <Typography className={classes.topicoS3} style={{textAlign: 'center'}}><span className={classes.emphasis}><Math tex={String.raw`O(n \cdot \log{n})`}/></span></Typography> }
    </Box>
  );
}

export function ProblemaOrdenacao2(props) {
  const classes = useStyles(props);
  const {step, placeholder: stepPlaceholder}  = useSteps(3, {});

  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignContent="center"
        justifyContent="space-evenly">
      {stepPlaceholder}
      <Typography className={classes.topicoS2} style={{textAlign: 'center'}}>Existem outros algoritmos de ordenação mais eficientes?</Typography>
      { step >= 0 && <Typography className={classes.topicoS2} style={{textAlign: 'center'}}><a href="https://www.bigocheatsheet.com/" target="_blank" rel="noreferrer">https://www.bigocheatsheet.com/</a></Typography> }
      { step >= 1 && <Typography className={classes.topicoS2} style={{textAlign: 'center'}}>Sim, mas apresentam restrições</Typography> }
      { step >= 2 && <Typography className={classes.topicoS2} style={{textAlign: 'center'}}><a href="https://visualgo.net/en" target="_blank" rel="noreferrer">https://visualgo.net/en</a></Typography> }
    </Box>
  );
}