import '../../../App.css';
import SlideInicial from '../../../ImdCommons/SlideInicial';
import { List, makeStyles } from '@material-ui/core';
import { themeBaseStyles } from '../../../styles';
import SlideAgenda, { Topico } from '../../../ImdCommons/SlideAgenda';
import ImdSlide from '../../../ImdCommons/ImdSlide';
import { useEffect } from 'react';
import { HerancaDiagramasDeClasse } from './Heranca';

const useStyles = makeStyles((theme, props) => (themeBaseStyles(theme, props)));

export default function SlidesAula05LP2(props) {
  const classes = useStyles(props);

  useEffect(() => {
    document.title = "LP2 - Aula 05 - Herança e Polimorfismo"
  }, []);

  return (
    <>
      <SlideInicial
        codigoDisciplina="IMD0040"
        nomeDisciplina="Linguagem de Programação 2"
        semestre="2020.2"
        />
      <SlideAgenda>
        <Topico>Herança</Topico>
        <Topico>Polimorfismo</Topico>
      </SlideAgenda>
      <ImdSlide heading="Herança">
        <List component="ul" className={classes.bullets}>
          <Topico className={classes.topicoS1}><span className={classes.emphasis}>Herança</span> é um mecanismo que permite que uma classe possa herdar o comportamento e as características de outra classe.</Topico>
          <Topico className={classes.topicoS1}>ao mesmo tempo que <span className={classes.emphasis}>novos comportamentos e características</span> podem ser estabelecidos.</Topico>
          <Topico className={classes.topicoS1}>Podemos dizer que uma subclasse <span className={classes.emphasis}>herda</span> de sua superclasse.</Topico>
          <Topico className={classes.topicoS1}>A subclasse é mais <span className={classes.emphasis}>específica</span> que a superclasse. Por isso, chamamos de <span className={classes.emphasis}>especialização</span>especialização.</Topico>
        </List>
      </ImdSlide>
      <ImdSlide heading="Herança">
        <HerancaDiagramasDeClasse/>
      </ImdSlide>
    </>
  );
}
