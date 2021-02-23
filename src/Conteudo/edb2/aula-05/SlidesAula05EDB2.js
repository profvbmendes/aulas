import '../../../App.css';
import SlideInicial from '../../../ImdCommons/SlideInicial';
import { Box, List, makeStyles } from '@material-ui/core';
import { baseStyles } from '../../../styles';
import SlideAgenda, { Topico } from '../../../ImdCommons/SlideAgenda';
import ImdSlide from '../../../ImdCommons/ImdSlide';
import MergeSortExample from './MergeSort';
import MergeSortCode from './MergeSortCode';
import RelacoesDeRecorrencia from './RelacoesDeRecorrencia';
import MetodoIteracao from './SubstituicaoRepetida';
import AnaliseEmArvore, { AnaliseEmArvoreExercicio, AnaliseEmArvoreFormulas, AnaliseEmArvoreFormulas2 } from './AnaliseEmArvore';
import MergeSortAnaliseEmArvore, { MergeSortAnaliseEmArvore2 } from './MergeSortAnaliseArvore';
import MetodoMestre, { MetodoMestreArvore, MetodoMestreCasos, MetodoMestreMergeSort } from './MetodoMestre';
import MetodoSubstituicao from './MetodoSubstituicao';
import Math from '../../../ImdCommons/Math';
import { useEffect } from 'react';

const useStyles = makeStyles((theme, props) => (baseStyles));

function SlidesAula05EDB2(props) {
  const classes = useStyles(props);

  useEffect(() => {
    document.title = "EDB2 - Aula 05 - Resolvendo Relações de Recorrência"
  }, []);

  return (
    <>
      <SlideInicial
        codigoDisciplina="IMD0039"
        nomeDisciplina="Estruturas de Dados Básicas 2"
        semestre="2020.2"
        />
      <SlideAgenda>
        <Topico>Relações de recorrência</Topico>
        <Topico>Método da iteração repetida</Topico>
        <Topico>Análise em árvore</Topico>
        <Topico>Método da substituição</Topico>
        <Topico>Método Mestre</Topico>
        <Topico>Lista de Exercícios</Topico>
      </SlideAgenda>
      <ImdSlide heading="Relações de Recorrência"><RelacoesDeRecorrencia/></ImdSlide>
      <ImdSlide heading="Metodo da Iteração: Busca Binária"><MetodoIteracao/></ImdSlide>
      <ImdSlide heading="Análise em Árvore"><AnaliseEmArvore/></ImdSlide>
      <ImdSlide heading="Análise em Árvore"><AnaliseEmArvoreFormulas/></ImdSlide>
      <ImdSlide>
        <AnaliseEmArvoreFormulas2/>
      </ImdSlide>
      <ImdSlide heading="Merge sort">
        <MergeSortExample/>
      </ImdSlide>
      <ImdSlide heading="Merge sort: Código">
        <MergeSortCode/>
      </ImdSlide>
      <ImdSlide heading="Merge sort: Análise em árvore">
        <MergeSortAnaliseEmArvore/>
      </ImdSlide>
      <ImdSlide>
        <MergeSortAnaliseEmArvore2/>
      </ImdSlide>
      <ImdSlide heading="Método de substituição">
        <MetodoSubstituicao/>
      </ImdSlide>
      <ImdSlide heading="Exercício: Análise em árvore">
        <AnaliseEmArvoreExercicio/>
      </ImdSlide>
      <ImdSlide heading="Método Mestre">
        <MetodoMestre></MetodoMestre>
      </ImdSlide>
      <ImdSlide>
        <MetodoMestreArvore/>
      </ImdSlide>
      <ImdSlide heading="Método Mestre">
        <MetodoMestreCasos/>
      </ImdSlide>
      <ImdSlide heading="Método Mestre: Merge Sort">
        <MetodoMestreMergeSort/>
      </ImdSlide>
      <ImdSlide heading="Exercícios">
        <List component="ul" className={classes.bullets}>
          <Topico>Aplique o método mestre para cada uma das seguintes recorrências: 
            <List component="ol" className={classes.lowerRomanOl}>
              <Topico><Math tex={String.raw`T(n) = 9T(n/3) + 1`}/></Topico>
              <Topico><Math tex={String.raw`T(n) = 4T(n/2) + n`}/></Topico>
              <Topico><Math tex={String.raw`T(n) = 16T(n/4) + n^2`}/></Topico>
            </List>
          </Topico>
        </List>
      </ImdSlide>
      <ImdSlide heading="Referências">
        <Box className={classes.slideContentColumnBox}>
          <List component="ul" className={classes.numbersOl}>
            <Topico>CORMEN, T.; LEISERSON, C. E.; RIVEST, R. L.; STEIN, C. Introduction to Algorithms. 2. ed. Massachusetts: The MIT Press, 2001.</Topico>
            <Topico>BRASSARD, G.; BRATLEY, P. Fundamentals of algorithmics. Prentice Hall, 1995.</Topico>
          </List>
        </Box>
      </ImdSlide>
      );
    </>
  );
}

export default SlidesAula05EDB2;
