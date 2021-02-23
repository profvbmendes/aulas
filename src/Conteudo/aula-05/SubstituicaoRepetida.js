import { Grid, makeStyles, Typography } from "@material-ui/core";
import Math from "../../ImdCommons/Math";
import { baseStyles } from "../../styles";

const useStyles = makeStyles((theme, props) => ({
  ...baseStyles,
  emphasis: {
    color: theme.palette.emphasis.main
  },
  formula: {
    fontSize: '1.8em',
  }
}));

export default function MetodoIteracao(props) {  
  const classes = useStyles(props);
  return (
    <>
      <Grid container
        direction="column"
        alignItems="center"
        justify="space-evenly"
        spacing={3}>
        <Grid item className={classes.formula}>
          <Typography style={{fontSize:'1.3em'}}><Math tex={String.raw`T(n)`}/> é o tempo para processar um problema de tamanho n.</Typography>
        </Grid>
        <Grid item flexGrow={1}>
          <Grid container
              direction="row"
              alignItems="center"
              justify="space-evenly"
              spacing={3}>
            <Grid item className={classes.formula}>
              <Math tex={String.raw`T(n) = \begin{cases}
                    1 & \text{para $n = 1$}\\
                    T(n/2) + 1 & \text{para $n > 1$}
                    \end{cases}\implies`}/>
            </Grid>
            <Grid item className={classes.formula}>
              <Math tex={String.raw`\begin{split}
                      T(n) & = 1 + T(n/2) \\
                          & = 1 + 1 + T(n/2^2)  \\
                          & = 1 + 1 + 1 + T(n/2^3) \\
                          & = 1 + 1 + 1 + 1 + T(n/2^4) \\
                          & = ... \\
                          & = l + T(n/2^l) \\
                          & = \log_2{n} + 1 \in \Theta(\log{n})
                    \end{split}`}/>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}