import '../../../App.css';
import SlideInicial from '../../../ImdCommons/SlideInicial';
import { Box, List, makeStyles, Typography } from '@material-ui/core';
import { themeBaseStyles } from '../../../styles';
import ImdSlideDuvidas from '../../../ImdCommons/ImdSlideDuvidas';
import { useEffect } from 'react';
import SlideAgenda, { Topico } from '../../../ImdCommons/SlideAgenda';
import ImdSlide from '../../../ImdCommons/ImdSlide';
import { ArvoresBuscaBinaria } from '../aula-07/Arvores';
import Math from '../../../ImdCommons/Math';
import { arvoreHeap, heapVector, heapVector1, heapVector2, heapVector3 } from '../../../data/arvoreHeap';
import { ImdVector } from '../../../ImdCommons/ImdVector';
import { CodePane } from 'spectacle';
import ImdCodePane from '../../../ImdCommons/ImdCodePane';

const useStyles = makeStyles((theme, props) => (themeBaseStyles(theme, props)));

export function SlidesAula10EDB2(props) {
  const classes = useStyles(props);
  const orderedVector = [{value: 8}, {value: 12}, {value: 15}, {value: 18}, {value: 28}, {value: 45}, {value: 62}];

  useEffect(() => {
    document.title = "EDB2 - Aula 10 - Heap e heapsort"
  }, []);

  return (
    <>
      <SlideInicial
        codigoDisciplina="IMD0039"
        nomeDisciplina="Estruturas de Dados Básicas 2"
        assunto="Heap e heapsort"
        semestre="2020.2"
        />
      <SlideAgenda>
        <Topico>Lista de prioridades</Topico>
        <Topico>Heap</Topico>
        <Topico>Heapsort</Topico>
      </SlideAgenda>
      <ImdSlide heading="Lista de prioridades e heap">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Uma <span className={classes.emphasis}>lista de prioridade</span> é uma estrutura que permite obter facilmente o menor ou o maior elemento da lista.</Typography>
          <Typography className={classes.topicoS2}>A <span className={classes.emphasis}>heap</span> é um vetor que pode se representado como uma árvore.</Typography>
          <Typography className={classes.topicoS2}>Nas <span className={classes.emphasis}>heaps de máximo</span> (ou max heaps), a raiz de cada subárvore é sempre <span className={classes.emphasis}>maior</span> que os nós das subárvores filhas.</Typography>
          <Typography className={classes.topicoS2}>Nas <span className={classes.emphasis}>heaps de mínimo</span> (ou min heaps), a raiz de cada subárvore é sempre <span className={classes.emphasis}>menor</span> que os nós das subárvores filhas.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Heap: representações">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ImdVector
            data={heapVector}
            height={100}  />
          <ArvoresBuscaBinaria arvore={arvoreHeap} zoom={0.75}/>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Heap: Exercício">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Verificar se é heap:</Typography>
          <ImdVector
            data={heapVector1}
            height={100}  />
          <ImdVector
            data={heapVector2}
            height={100}  />
          <ImdVector
            data={heapVector3}
            height={100}  />
        </Box>
      </ImdSlide>
      <ImdSlide heading="Heap: índices">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ImdVector
            data={heapVector}
            height={100}  />
          <Typography className={classes.topicoS2}><Math tex={String.raw`\left\lfloor i/2 \right\rfloor`}/> é o índice do pai.</Typography>
          <Typography className={classes.topicoS2}><Math tex={String.raw`2 \cdot i`}/> é o índice do filho esquerdo.</Typography>
          <Typography className={classes.topicoS2}><Math tex={String.raw`2 \cdot i + 1`}/> é o índice do filho direito.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Heap: definições">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Uma heap é sempre uma <span className={classes.emphasis}>Árvore Binária Completa</span>.</Typography>
          <ImdVector
            data={heapVector}
            height={100}  />
          <ArvoresBuscaBinaria arvore={arvoreHeap} zoom={0.75}/>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Heap: operações">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Selecionar o elemento com maior (ou menor) prioridade.</Typography>
          <Typography className={classes.topicoS2}>Inserir um novo elemento.</Typography>
          <Typography className={classes.topicoS2}>Remover o elemento de maior (ou menor) prioridade.</Typography>
          <Typography className={classes.topicoS2}>Alterar a prioridade de um elemento.</Typography>
          <Typography className={classes.topicoS2}>Construir heap</Typography>
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
