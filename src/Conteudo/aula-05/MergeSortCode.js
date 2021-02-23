import { Box, makeStyles } from "@material-ui/core";
import { useSteps } from "spectacle/es/hooks/use-steps";
import { mergeCode, mergeSortCode } from "../../codes/merge_sort";
import { mergeSortRecorrencia } from "../../formulas";
import ImdCodePane from "../../ImdCommons/ImdCodePane";
import Math from "../../ImdCommons/Math";
import { baseStyles } from "../../styles";

const useStyles = makeStyles((theme, props) => ({
  ...baseStyles,
  emphasis: {
    color: theme.palette.emphasis.main
  }
}));

export default function MergeSortCode(props) {
  const classes = useStyles(props);
  const {step, placeholder: stepPlaceholder} = useSteps(3, {});
  const code = step < 1 ? mergeCode : mergeSortCode;
  const complexidade = step < 1 ? <Math tex={String.raw`\Theta(n)`}/> : <span className={classes.emphasis} style={{fontSize:'0.4em'}}><Math tex={mergeSortRecorrencia}/></span>; 
  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="colun"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={3}>
      {stepPlaceholder}
      <Box style={{fontSize: '1.2em'}}>
        <ImdCodePane language="java">
          {code}
        </ImdCodePane>
      </Box>
      <Box style={{fontSize: '1.2em'}}>
        {(step === 0 || step === 2) && <p className={classes.formula} style={{textAlign: 'center'}}>{complexidade}</p>}
      </Box>
    </Box>);
}
