import { Box, makeStyles, Typography } from "@material-ui/core";
import { themeBaseStyles } from "../../../styles";
import { ImdLinkedList } from "../../../ImdCommons/ImdLinkedList";
import { ImdVector } from "../../../ImdCommons/ImdVector";
import { useSteps } from "spectacle/es/hooks/use-steps";
import HideByStep from "../../../ImdCommons/HideByStep";

const useStyles = makeStyles((theme, props) => ({
  ...themeBaseStyles(theme, props),
}));


export function BuscaBinaria(props) {
  const classes = useStyles(props);
  const source = [{value: 8}, {value: 12}, {value: 15}, {value: 18}, {value: 28}, {value: 45}, {value: 62}];
  const sourceList = [{value: 8}, {value: 12}, {value: 15}, {value: 18}, {value: 28}, {value: 45}, {value: 62}];
  const {step, placeholder: stepPlaceholder}  = useSteps(4, {});

  if (step >= 0) source[3].highlight = true;

  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
        style={{textAlign: 'center'}}>
      {stepPlaceholder}
      <ImdVector
        data={source}
        height={100}  />
      <HideByStep step={step} visibleIn="0-">
        <Typography className={classes.topicoS2}>Em vetor utilizamos o índice, mas a <span className={classes.emphasis}>estrutura é estática</span>.</Typography>
      </HideByStep>
      <HideByStep step={step} visibleIn="1-">
        <ImdLinkedList
          data={sourceList}
          height={100} />
      </HideByStep>
      <HideByStep step={step} visibleIn="2-">
        <Typography className={classes.topicoS2}>A lista ligada é dinâmica, mas não temos como saber quem é o <span className={classes.emphasis}>nó do meio</span>.</Typography>
      </HideByStep>
      <HideByStep step={step} visibleIn="3-">
        <Typography className={classes.topicoS3}><span class={classes.danger}>Como resolver?</span></Typography>
      </HideByStep>
    </Box>
  );
}