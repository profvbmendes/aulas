import { Box, makeStyles, Typography } from "@material-ui/core";
import Math from "../../ImdCommons/Math";
import { baseStyles } from "../../styles";

const useStyles = makeStyles((theme, props) => ({
  ...baseStyles,
  emphasis: {
    color: theme.palette.emphasis.main
  },
  formula: {
    fontSize: '2em',
  }
}));

export default function RelacoesDeRecorrencia(props) {  
  const classes = useStyles(props);
  return (
    <>
      <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly">
        <Box className={classes.formula}>
          <Math tex={String.raw`f(n) = \begin{cases}
                  n & \text{para $n = 0$ ou $n = 1$}\\
                  f(n-1) + f(n-2) & \text{para $n > 1$}
                \end{cases}`}/>
        </Box>
        <Box className={classes.formula}>
          <Typography style={{fontSize:'2em'}}>Funções que referenciam a si mesmas.</Typography>
        </Box>
      </Box>
    </>
  );
}