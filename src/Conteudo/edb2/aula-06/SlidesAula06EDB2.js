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
      <ImdSlide heading="Complexidade de Algoritmo vs Complexidade de Problema"></ImdSlide>
      <ImdSlide heading="Algoritmos">
        <AlgoritmosSlide/>
      </ImdSlide>
      <ImdSlide heading="Problema da ordenação">
        <ProblemaOrdenacao/>
      </ImdSlide>
      <ImdSlide heading="Problema da ordenação">
        <ProblemaOrdenacao2/>
      </ImdSlide>
      <ImdSlideDuvidas/>
      );
    </>
  );
}

export default SlidesAula05EDB2;
