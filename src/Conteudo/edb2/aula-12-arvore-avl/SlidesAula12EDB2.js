import '../../../App.css';
import SlideInicial from '../../../ImdCommons/SlideInicial';
import { Box, List, makeStyles, Typography } from '@material-ui/core';
import { themeBaseStyles } from '../../../styles';
import ImdSlideDuvidas from '../../../ImdCommons/ImdSlideDuvidas';
import { useEffect } from 'react';
import SlideAgenda, { Topico } from '../../../ImdCommons/SlideAgenda';
import ImdSlide from '../../../ImdCommons/ImdSlide';
import arvoresAvl from '../../../img/avl.PNG';
import avlSimplesDireita from '../../../img/avlSimplesDireita.PNG';
import avlDuplaDireita from '../../../img/avlDuplaDireita.PNG';
import avlSimplesEsquerda from '../../../img/avlSimplesEsquerda.PNG';
import avlDuplaEsquerda from '../../../img/avlDuplaEsquerda.PNG';
import Math from '../../../ImdCommons/Math';

const useStyles = makeStyles((theme, props) => (themeBaseStyles(theme, props)));

export function SlidesAula12EDB2(props) {
  const classes = useStyles(props);
  const orderedVector = [{value: 8}, {value: 12}, {value: 15}, {value: 18}, {value: 28}, {value: 45}, {value: 62}];

  useEffect(() => {
    document.title = "EDB2 - Aula 12 - Árvore AVL"
  }, []);

  return (
    <>
      <SlideInicial
        codigoDisciplina="IMD0039"
        nomeDisciplina="Estruturas de Dados Básicas 2"
        assunto="Árvores AVL"
        semestre="2020.2"
        />
      <SlideAgenda>
        <Topico>Árvore AVL</Topico>
        <Topico>Rotações</Topico>
        <Topico>Demonstração</Topico>
      </SlideAgenda>
      <ImdSlide heading="Árvores AVL">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Uma árvore binária T é denominada AVL quando, para qualquer nó de T, as alturas de suas duas subárvores, esquerda e direita, diferem em módulo de até uma unidade. Nesse caso, v é um nó regulado.</Typography>
          <Typography className={classes.topicoS2}>Em contrapartida, um nó que não satisfaça essa condição de altura é denominado desregulado, e uma árvore que contenha um nó nessas condições é também chamada desregulada.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores AVL: exemplo">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <img src={arvoresAvl} alt="Árvore AVL e não AVL"/>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores AVL: rotações">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Rotação simples à direita.</Typography>
          <Typography className={classes.topicoS2}>Rotação simples à esquerda.</Typography>
          <Typography className={classes.topicoS2}>Rotação dupla à direita.</Typography>
          <Typography className={classes.topicoS2}>Rotação dupla à esquerda.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores AVL: rotação simples à direita">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <img src={avlSimplesDireita} alt="Árvore AVL: rotação simples à direita"/>
          <Typography className={classes.topicoS2}><Math tex={String.raw`h_E(p) > h_D(p)\:\&\&\:h_E(u) > h_D(u)`}/></Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores AVL: rotação dupla à direita">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <img src={avlDuplaDireita} alt="Árvore AVL: rotação dupla à direita"/>
          <Typography className={classes.topicoS2}><Math tex={String.raw`h_E(p) > h_D(p)\:\&\&\:h_E(u) < h_D(u)`}/></Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores AVL: rotação simples à esquerda">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <img src={avlSimplesEsquerda} alt="Árvore AVL: rotação simples à esquerda"/>
          <Typography className={classes.topicoS2}><Math tex={String.raw`h_E(p) < h_D(p)\:\&\&\:h_E(u) < h_D(u)`}/></Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores AVL: rotação dupla à esquerda">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <img src={avlDuplaEsquerda} alt="Árvore AVL: rotação dupla à esquerda"/>
          <Typography className={classes.topicoS2}><Math tex={String.raw`h_E(p) < h_D(p)\:\&\&\:h_E(u) > h_D(u)`}/></Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores AVL: demonstração">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}><a href="https://www.inf.ufsc.br/~aldo.vw/estruturas/simulador/AVL.html" target="_blank" rel="noreferrer">https://www.inf.ufsc.br/~aldo.vw/estruturas/simulador/AVL.html</a></Typography>
        </Box>
      </ImdSlide>
      
      <ImdSlideDuvidas/>
      
      <ImdSlide heading="Referências">
        <Box className={classes.slideContentColumnBox}>
          <List component="ul" className={classes.numbersOl}>
            <Topico>SZWARCFITER, Jayme Luiz; MARKENZON, Lilian. Estruturas de dados e seus algoritmos. 3. ed. Rio de Janeiro: LTC, 2010.</Topico>
          </List>
        </Box>
      </ImdSlide>
    </>
  );
}
