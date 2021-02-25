import { Box, makeStyles, Typography } from "@material-ui/core";
import { Heading, Notes } from "spectacle";
import { themeBaseStyles } from "../styles";
import ImdSlide from "./ImdSlide";

const useStyles = makeStyles((theme, props) => {
  const base = themeBaseStyles(theme, props);
  return {
    ...base,
    root: {
      ...base.root,
      textAlign: 'center'
    },
    codigoDisciplina: {
      color: theme.palette.secondary.main,
      fontSize: '6rem',
      fontWeight: 'bold',
      opacity: 0.5,
    },
    nomeDisciplina: {
      fontSize: '5rem'
    },
    semestre: {
      color: theme.palette.secondary.main,
      fontSize: '2.5rem',
      lineHeight: '5rem'
    },
    assunto: {
      color: theme.palette.secondary.main,
      fontSize: '3rem',
      fontWeight: 'bold',
      lineHeight: '5rem'
    },
    texto: {
      color: theme.palette.primary.main,
      fontSize: '2.5rem',
      lineHeight: '4rem'
    }
  };
});

export default function SlideInicial(props) {
  const classes = useStyles(props);

  return (
    <ImdSlide>
      <Box className={classes.root} flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly">
        <Typography className={classes.codigoDisciplina}>{props.codigoDisciplina}</Typography>
        <Heading className={classes.nomeDisciplina}>{props.nomeDisciplina}</Heading>
        <Typography className={classes.assunto}>{props.assunto}</Typography>
        <Typography className={classes.texto}>UFRN - Universidade Federal do Rio Grande do Norte</Typography>
        <Typography className={classes.texto}>IMD - Instituto Metrópole Digital</Typography>
        <Typography className={classes.texto}>Professor Vinicius Mendes &lt;<a href="mailto:vinicius.mendes@imd.ufrn.br" target="_blank" rel="noreferrer">mailto:vinicius.mendes@imd.ufrn.br</a>&gt;</Typography>
        <Typography className={classes.semestre}>{props.semestre}</Typography>
      </Box>
      <Notes>
        {props.notes ? props.notes : 'Nenhuma nota cadastrada'}
      </Notes>
    </ImdSlide>
  );
}
