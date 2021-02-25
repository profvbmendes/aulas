import { Box, makeStyles, Typography } from "@material-ui/core";
import { useSteps } from "spectacle/es/hooks/use-steps";
import ImdComplexityTable from "../../../ImdCommons/ImdComplexityTable";
import Math from "../../../ImdCommons/Math";
import { themeBaseStyles } from "../../../styles";

const useStyles = makeStyles((theme, props) => ({
  ...themeBaseStyles(theme),
}));

export default function AlgoritmosSlide(props) {
  const classes = useStyles(props);
  const {step, placeholder: stepPlaceholder}  = useSteps(1, {});

  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignContent="center"
        justifyContent="space-evenly">
      {stepPlaceholder}
      <Typography className={classes.topicoS3} style={{textAlign: 'center'}}>Resolvem <span className={classes.emphasis}>problemas</span>!</Typography>
      { step >= 0 && <Typography className={classes.topicoS3} style={{textAlign: 'center'}}>O <span className={classes.emphasis}>limite superior</span> da complexidade de um problema é dado pelo <span className={classes.emphasis}>limite superior no pior caso do melhor algoritmo</span> que o resolve.</Typography> }
    </Box>
  );
}