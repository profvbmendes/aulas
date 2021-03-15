import '../../../App.css';
import SlideInicial from '../../../ImdCommons/SlideInicial';
import { Box, List, makeStyles, Typography } from '@material-ui/core';
import { themeBaseStyles } from '../../../styles';
import ImdSlideDuvidas from '../../../ImdCommons/ImdSlideDuvidas';
import { useEffect } from 'react';
import SlideAgenda, { Topico } from '../../../ImdCommons/SlideAgenda';
import ImdSlide from '../../../ImdCommons/ImdSlide';
import { BuscaBinaria } from './BuscaBinaria';
import { ArvoreBinariaDefinicao, ArvoresBuscaBinaria, ArvoresConceitos, ArvoresDefinicao } from './Arvores';
import Math from '../../../ImdCommons/Math';
import { arvoreBinaria, arvoreBinariaCompleta, arvoreEstritamenteBinaria } from '../../../data/arvoreBinaria';

const useStyles = makeStyles((theme, props) => (themeBaseStyles(theme, props)));

export function SlidesAula07EDB2(props) {
  const classes = useStyles(props);

  useEffect(() => {
    document.title = "EDB2 - Aula 07 - Conceitos de Árvores"
  }, []);

  return (
    <>
      <SlideInicial
        codigoDisciplina="IMD0039"
        nomeDisciplina="Estruturas de Dados Básicas 2"
        assunto="Árvores"
        semestre="2020.2"
        />
      <SlideAgenda>
        <Topico>Conceito de árvore</Topico>
        <Topico>Limite inferior de um problema</Topico>
        <Topico>Árvore de decisão</Topico>
        <Topico>Algoritmo ótimo</Topico>
      </SlideAgenda>
      <ImdSlide heading="Busca Binária">
        <BuscaBinaria/>
      </ImdSlide>
      <ImdSlide heading="Árvores">
        <ArvoresBuscaBinaria buscaBinaria={true}/>
      </ImdSlide>
      <ImdSlide heading="Árvores: Definição">
        <ArvoresDefinicao/>
      </ImdSlide>
      <ImdSlide heading="Árvores: Conceitos">
        <ArvoresConceitos/>
      </ImdSlide>
      <ImdSlide heading="Árvores: Raiz">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria raiz={true}/>
          <Typography className={classes.topicoS2}>A árvore é referenciada à partir de sua raiz, chamada de <span className={classes.emphasis}>r</span>.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores: Subárvore">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria subarvore={true}/>
          <Typography className={classes.topicoS2}>Uma <span className={classes.emphasis}>subárvore de T</span> cuja raiz é um nó <span className={classes.emphasis}>v</span> é chamada de <span className={classes.emphasis}>T<sub>v</sub></span>.</Typography>
          <Typography className={classes.topicoS2}>Se E pertence a T<sub>B</sub>, então E é <span className={classes.emphasis}>descendente</span> de B e B é <span className={classes.emphasis}>ancestral</span> de E.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores: Subárvore">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria subarvore2={true}/>
          <Typography className={classes.topicoS2}>Mesmo os nós que não possuem descendentes também são raízes de uma subárvore.</Typography>
          <Typography className={classes.topicoS2}><span className={classes.emphasis}>E é raiz da subárvore T<sub>E</sub>.</span></Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores: Folhas">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria folhas={true}/>
          <Typography className={classes.topicoS2}>Os nós que não possuem descendentes são chamados de <span className={classes.emphasis}>folhas</span>.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores: Caminhos">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria caminhos={true}/>
          <Typography className={classes.topicoS2}>A ligação entre dois nós de uma árvore é chamada de <span className={classes.emphasis}>arco</span> ou <span className={classes.emphasis}>aresta</span>.</Typography>
          <Typography className={classes.topicoS2} style={{textAlign: 'center'}}>O <span className={classes.emphasis}>caminho</span> de um nó A até um nó F é o conjunto de arestas que devem ser percorridas para chegar de A a F.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores: Altura">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria altura={true}/>
          <Typography className={classes.topicoS2}>A altura <span className={classes.emphasis}>h</span> de um nó é maior distância entre ele e uma folha.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores: Nível">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria nivel={true}/>
          <Typography className={classes.topicoS2}>O nível de um nó é maior distância entre ele e a raiz.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores: Grau de um nó">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria grau={true}/>
          <Typography className={classes.topicoS2}>O <span className={classes.emphasis}>grau</span> de um nó é dado pelo número de filhos de um nó.</Typography>
          <Typography className={classes.topicoS2}>Um nó com <Math tex={String.raw`grau > 0`}/> é chamado de <span className={classes.emphasis}>nó interior</span>.</Typography>
          <Typography className={classes.topicoS2}><span className={classes.danger}>E um nó com <Math tex={String.raw`grau = 0`}/>?</span></Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores: Grau de uma árvore (Aridade)">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria grauArvore={true}/>
          <Typography className={classes.topicoS2}>Uma <span className={classes.emphasis}>árvore m-ária</span> é uma árvore cujos nós têm <Math tex={String.raw`grau <= m`}/>.</Typography>
          <Typography className={classes.topicoS2}>T<sub>B</sub> é uma subárvore <span className={classes.emphasis}>binária</span>.</Typography>
          <Typography className={classes.topicoS2}><span className={classes.danger}>Qual a aridade de T?</span></Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores: Relações">
        <Box display="flex"
            className={classes.root}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria relacoes={true}/>
          <Box display="flex"
              className={classes.root}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-evenly">
            <Box display="flex"
                className={classes.root}
                flexDirection="column"
                alignItems="left"
                justifyContent="space-evenly">
              <Typography className={classes.topicoS1}>A é a <span className={classes.emphasis}>raiz</span> da árvore.</Typography>
              <Typography className={classes.topicoS1}>A é <span className={classes.emphasis}>pai</span> de B, C e D.</Typography>
              <Typography className={classes.topicoS1}>A é <span className={classes.emphasis}>avô</span> de E, F e G.</Typography>
              <Typography className={classes.topicoS1}>B é <span className={classes.emphasis}>raiz da subárvore</span> <Math tex={String.raw`T_B`}/>.</Typography>
              <Typography className={classes.topicoS1}>B é <span className={classes.emphasis}>filho</span> de A.</Typography>
              <Typography className={classes.topicoS1}>B é <span className={classes.emphasis}>irmão</span> de C e D.</Typography>
            </Box>
            <Box display="flex"
                className={classes.root}
                flexDirection="column"
                alignItems="left"
                justifyContent="space-evenly">
              <Typography className={classes.topicoS1}>B é <span className={classes.emphasis}>pai</span> de E, F e G.</Typography>
              <Typography className={classes.topicoS1}>E, F, G e D são <span className={classes.emphasis}>folhas</span>.</Typography>
              <Typography className={classes.topicoS1}>E é <span className={classes.emphasis}>raiz da subárvore</span> <Math tex={String.raw`T_E`}/>.</Typography>
              <Typography className={classes.topicoS1}>E é <span className={classes.emphasis}>filho</span> de B.</Typography>
              <Typography className={classes.topicoS1}>E é <span className={classes.emphasis}>neto</span> de A.</Typography>
            </Box>
          </Box>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores: Exercícios">
        <List component="ol" className={classes.numbersOl}>
          <Topico><span style={{fontSize: '0.8em'}}>Implementar uma árvore com as operações de buscar, adicionar, excluir e print.</span></Topico>
          <Topico><span style={{fontSize: '0.8em'}}>Ao buscar um nó, retornar o nível em que o nó se encontra. Se ele não existir na árvore, retorne -1.</span></Topico>
          <Topico><span style={{fontSize: '0.8em'}}>Ao adicionar um nó, deve ser informado o seu valor e o valor do nó pai dele.</span></Topico>
          <Topico><span style={{fontSize: '0.8em'}}>Ao excluir um nó, escolha aleatoriamente um de seus filhos para ser a raiz da subárvore.</span></Topico>
          <Topico><span style={{fontSize: '0.8em'}}>O método print deve atender à seguinte relação de recorrência: <span style={{fontSize: '0.8em'}}><Math tex={String.raw`
              print(no) \begin{cases}
                \varnothing &\text{, se o nó é uma subárvore vazia} \\
                (no.valor\text{ }(print(no.filhos[0]),\text{ }print(no.filhos[1]),\text{ }...,\text{ }print(no.filhos[m]))) &\text{, para todo nó m-ário}
            \end{cases}`}/></span></span></Topico>
        </List> 
      </ImdSlide>
      <ImdSlide heading="Árvore Binária: Definição">
        <ArvoreBinariaDefinicao/>
      </ImdSlide>
      <ImdSlide heading="Árvore Binária">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvore={arvoreBinaria}/>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore Estritamente Binária">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvore={arvoreEstritamenteBinaria} estritamenteBinaria={true}/>
          <Typography className={classes.topicoS2}>Todos os nós possuem <span className={classes.emphasis}><Math tex={String.raw`grau == 0`}/></span> ou <span className={classes.emphasis}><Math tex={String.raw`grau == 2`}/></span>.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore Binária Completa">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvore={arvoreBinariaCompleta} binariaCompleta={true}/>
          <Typography className={classes.topicoS2}>Se um nó possui <span className={classes.emphasis}><Math tex={String.raw`grau < 2`}/></span>, então ele está no <span className={classes.emphasis}>último ou penúltimo nível</span> de T.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore Binária Cheia">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvore={arvoreBinaria} binariaCompleta={true}/>
          <Typography className={classes.topicoS2}>Se um nó possui <span className={classes.emphasis}><Math tex={String.raw`grau < 2`}/></span>, então ele está no <span className={classes.emphasis}>último nível</span> de T.</Typography>
          <Typography className={classes.topicoS2}><span className={classes.danger}>Esta árvore é estritamente binária? Ela é completa?</span></Typography>
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
