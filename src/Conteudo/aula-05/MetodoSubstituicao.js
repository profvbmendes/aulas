import { Box, makeStyles, Typography } from "@material-ui/core";
import Math from "../../ImdCommons/Math";
import { themeBaseStyles } from "../../styles";

const useStyles = makeStyles((theme, props) => ({
  ...themeBaseStyles(theme, props),
  topico: {
    fontSize: '2em',
    textAlign: 'center'
  }
}));

export default function MetodoSubstituicao(props) {  
  const classes = useStyles(props);
  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly">
      <Typography className={classes.topico}>
        Verificar a solução através de indução matemática.
      </Typography>
      <Typography className={classes.topico}>
        <Math tex={String.raw`\begin{cases}
          T(1) = 1\\
          T(n) = 2 \cdot T(n/2) + n & \text{para $n > 1$}\\
          T(n) = n \cdot \log{n} + n & (palpite)
          \end{cases}`}/>
      </Typography>
      <Typography className={classes.topico}>
        <strong>Base:&nbsp;&nbsp;</strong>
        <Math tex={String.raw`T(1) = 1 \cdot \log{1} + 1 = 1`}/>
      </Typography>
      <Typography className={classes.topico}>
        <strong>Passo indutivo:&nbsp;&nbsp;</strong>
        <Math tex={String.raw`\begin{cases}
          T(n) & = 2 \cdot T(n/2) + n\\
               & = n \cdot \log{n/2} + n + n \\
               & = n \cdot (\log{n} - \log{2}) + n + n \\
               & = n \cdot \log{n} - n + n + n\\
               & = n \cdot \log{n} + n
        \end{cases}`}/>
      </Typography>
    </Box>
  );
}
/*
4.3-1
Use the master method to give tight asymptotic bounds for the following recurrences.
a. T (n) = 4T (n/2) + n.
b. T (n) = 4T (n/2) + n2.
c. T (n) = 4T (n/2) + n3.*/