import '../../../App.css';
import SlideInicial from '../../../ImdCommons/SlideInicial';
import { makeStyles } from '@material-ui/core';
import { baseStyles } from '../../../styles';
import ImdSlide from '../../../ImdCommons/ImdSlide';
import ImdSlideDuvidas from '../../../ImdCommons/ImdSlideDuvidas';
import { useEffect } from 'react';
import AlgoritmosSlide from './Algoritmos';
import ProblemaOrdenacao from './ProblemaOrdenacao';
import {ProblemaOrdenacao2} from './ProblemaOrdenacao';
import SlideAgenda, { Topico } from '../../../ImdCommons/SlideAgenda';
import LimiteInferior, { ArvoreDecisao, ComplexidadeArvoreDecisao, AlgoritmoOtimo } from './LimiteInferior';

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
        assunto="Complexidade de Algoritmos vs Complexidade de Problemas"
        semestre="2020.2"
        />
      <SlideAgenda>
        <Topico>Limite superior de um problema</Topico>
        <Topico>Limite inferior de um problema</Topico>
        <Topico>Árvore de decisão</Topico>
        <Topico>Algoritmo ótimo</Topico>
      </SlideAgenda>
      <ImdSlide heading="Algoritmos">
        <AlgoritmosSlide/>
      </ImdSlide>
      <ImdSlide heading="Problema da ordenação">
        <ProblemaOrdenacao/>
      </ImdSlide>
      <ImdSlide heading="Problema da ordenação">
        <ProblemaOrdenacao2/>
      </ImdSlide>
      <ImdSlide heading="Limite Inferior">
        <LimiteInferior/>
      </ImdSlide>
      <ImdSlide heading="Árvore de Decisão">
        <ArvoreDecisao/>
      </ImdSlide>
      <ImdSlide heading="Árvore de Decisão">
        <ComplexidadeArvoreDecisao/>
      </ImdSlide>
      <ImdSlide heading="Algoritmo ótimo">
        <AlgoritmoOtimo/>
      </ImdSlide>
      <ImdSlideDuvidas/>
      );
    </>
  );
}

export default SlidesAula05EDB2;
