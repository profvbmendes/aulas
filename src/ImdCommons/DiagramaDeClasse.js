import { makeStyles } from '@material-ui/core';
import { themeBaseStyles } from '../styles';

const useStyles = makeStyles((theme, props) => ({
  ...themeBaseStyles(theme, props),
  innerRoot: {
    fontSize: '1.5em'
  },
  nomeClasse: {
    border: '1px solid black',
    padding: '0.5em',
    textAlign: 'center'
  },
  atributos: {
    border: '1px solid black',
    listStyle: 'none',
    padding: '0.5em',
    margin: '0'
  },
  metodos: {
    border: '1px solid black',
    listStyle: 'none',
    padding: '0.5em',
    margin: '0'
  }
}));


export default function DiagramaDeClasse(props) {
  const classes = useStyles(props);
  return (
    <div className={[classes.innerRoot]}>
      <div className={classes.nomeClasse}>{props.nome}</div>
      <ul className={classes.atributos}>
        {props.atributos.map(atributo => <li>{atributo}</li>)}
      </ul>
      <ul className={classes.metodos}>
        {props.metodos.map(metodo => <li>{metodo}</li>)}
      </ul>
    </div>
  );  
}