import { makeStyles, Typography } from "@material-ui/core";
import { FlexBox, Heading, Notes } from "spectacle";
import ImdSlide from "./ImdSlide";

const useStyles = makeStyles((theme, props) => ({
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
  },texto: {
    color: theme.palette.primary.main,
    fontSize: '2.5rem',
    lineHeight: '5rem'
  }
}));

export default function SlideInicial(props) {
  const classes = useStyles(props);

  return (
    <ImdSlide>
      <FlexBox flexDirection="column" height="100%" >
        <Typography className={classes.codigoDisciplina}>{props.codigoDisciplina}</Typography>
        <Heading className={classes.nomeDisciplina}>{props.nomeDisciplina}</Heading>
        <Typography className={classes.texto}>UFRN - Universidade Federal do Rio Grande do Norte</Typography>
        <Typography className={classes.texto}>IMD - Instituto Metrópole Digital</Typography>
        <Typography className={classes.texto}>Professor Vinicius Mendes &lt;<a href="mailto:vinicius.mendes@imd.ufrn.br" target="_blank" rel="noreferrer">mailto:vinicius.mendes@imd.ufrn.br</a>&gt;</Typography>
        <Typography className={classes.semestre}>{props.semestre}</Typography>
      </FlexBox>
      <Notes>
        {props.notes ? props.notes : 'Nenhuma nota cadastrada'}
      </Notes>
    </ImdSlide>
  );
}
