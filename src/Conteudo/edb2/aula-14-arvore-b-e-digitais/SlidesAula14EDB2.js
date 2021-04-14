import '../../../App.css';
import SlideInicial from '../../../ImdCommons/SlideInicial';
import { Box, List, makeStyles, Typography } from '@material-ui/core';
import { themeBaseStyles } from '../../../styles';
import ImdSlideDuvidas from '../../../ImdCommons/ImdSlideDuvidas';
import { useEffect } from 'react';
import SlideAgenda, { Topico } from '../../../ImdCommons/SlideAgenda';
import ImdSlide from '../../../ImdCommons/ImdSlide';
import Math from '../../../ImdCommons/Math';
import { ArvoresBuscaBinaria } from '../aula-07/Arvores';
import { arvoreGraduada, arvoreRubroNegra, arvoreRubroNegraSemCor } from '../../../data/arvoreRubroNegra';
import rnSimplesDireita from '../../../img/rnSimplesDireita.PNG';
import rnDuplaDireita from '../../../img/rnDuplaDireita.PNG';
import rnSimplesEsquerda from '../../../img/rnSimplesEsquerda.PNG';
import rnDuplaEsquerda from '../../../img/rnDuplaEsquerda.PNG';
import rnDefinicoes from '../../../img/rnDefinicoes.PNG';
import rnDefinicoesCenario2 from '../../../img/rnDefinicoesCenario2.png';
import rnDefinicoesTriangulo from '../../../img/rnDefinicoesTriangulo.PNG';

const useStyles = makeStyles((theme, props) => (themeBaseStyles(theme, props)));

export function SlidesAula14EDB2(props) {
  const classes = useStyles(props);

  useEffect(() => {
    document.title = "EDB2 - Aula 13 - Árvores B (B-Tree) e digitais (Tries)"
  }, []);

  return (
    <>
      <SlideInicial
        codigoDisciplina="IMD0039"
        nomeDisciplina="Estruturas de Dados Básicas 2"
        assunto="Árvores B (B-Tree) e digitais (Tries)"
        semestre="2020.2"
        />
      <SlideAgenda>
        <Topico>Árvores B (B-Tree)</Topico>
        <Topico>Árvores Digitais</Topico>
        <Topico>Implementação de árvore digital</Topico>
      </SlideAgenda>
      <ImdSlide heading="Árvore B (B-Tree)">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Mais de uma chave é armazenada em cada nó.</Typography>
          <Typography className={classes.topicoS2}>Assegura que todas as suas folhas estejam no último nível da árvore.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore B (B-Tree): ordem">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Diz-se que uma árvore B é de <span className={classes.emphasis}>ordem <Math tex={String.raw`d`}/></span> se ela é vazia ou satisfaz as condições:</Typography>
          <Typography className={classes.topicoS2}>(i) A raiz é uma folha ou tem pelo menos dois filhos.</Typography>
          <Typography className={classes.topicoS2}>(ii) Cada nó diferente das folhas e da raiz tem pelo menos <Math tex={String.raw`d + 1`}/> filhos.</Typography>
          <Typography className={classes.topicoS2}>(iii) Cada nó tem no máximo <Math tex={String.raw`2d + 1`}/> filhos.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore B (B-Tree): página">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Um nó de uma árvore B é chamado de PÁGINA e apresenta as seguintes propriedades:</Typography>
          <Typography className={classes.topicoS2}>(i) Seja <Math tex={String.raw`m`}/> o número de chaves em uma página P não folha, então P possui <Math tex={String.raw`m + 1`}/> filhos.</Typography>
          <Typography className={classes.topicoS2}>(ii) Cada página possui entre <Math tex={String.raw`d`}/> e <Math tex={String.raw`2d`}/> chaves, exceto o nó raiz que possui entre <Math tex={String.raw`1`}/> e <Math tex={String.raw`2d`}/> chaves.</Typography>
          <Typography className={classes.topicoS2}>(iii) As chaves de cada página estão ordenadas e <Math tex={String.raw`d \leqslant m \leqslant 2d`}/>. Para a raiz, <Math tex={String.raw`1 \leqslant m \leqslant 2d`}/>.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore B (B-Tree): exemplo">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Adicionar os nós 9, 30, 60, 80 no link abaixo:</Typography>
          <Typography className={classes.topicoS2}><a href="https://www.cs.usfca.edu/~galles/visualization/BTree.html" target="_blank" rel="noreferrer">https://www.cs.usfca.edu/~galles/visualization/BTree.html</a></Typography>
          <Typography className={classes.topicoS2}>O que acontece se inserirmos o 70?</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore B (B-Tree): busca">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Semelhante a uma busca em uma árvore binária de busca.</Typography>
          <Typography className={classes.topicoS2}>Os filhos são sempre maiores que o nó esquerdo do pai e menores que o nó direito do pai.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore B (B-Tree): inserção">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Encontra o nó folha onde o novo elemento deve ser inserido.</Typography>
          <Typography className={classes.topicoS2}>Insere o novo elemento.</Typography>
          <Typography className={classes.topicoS2}>Caso o nó passe a ter mais chaves do que o limite, divide o nó em dois e coloca o elemento do meio no nó pai.</Typography>
          <Typography className={classes.topicoS2}>Este procedimento pode se repetir até que seja necessário dividir a raiz e com isso aumentar a altura da árvore.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore B (B-Tree): remoção">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Encontra o nó a ser removido.</Typography>
          <Typography className={classes.topicoS2}>Susbtitui ele pelo seu maior nó de sua sub-árvore esquerda ou pelo menor nó de sua sub-árvore direita.</Typography>
          <Typography className={classes.topicoS2}>Remove o elemento de seu nó.</Typography>
          <Typography className={classes.topicoS2}>Caso alguma regra seja violada, pode ocorrer a fusão de dois nós.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore B (B-Tree): complexidades">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Busca: <Math tex={String.raw`O(\log{n})`}/></Typography>
          <Typography className={classes.topicoS2}>Inserção: <Math tex={String.raw`O(\log{n})`}/></Typography>
          <Typography className={classes.topicoS2}>Remoção: <Math tex={String.raw`O(\log{n})`}/></Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores digitais (Tries)">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Considere um alfabeto formado por dígitos <Math tex={String.raw`d_1, ... d_n`}/>.</Typography>
          <Typography className={classes.topicoS2}>Cada chave é formada por uma sequência de dígitos.</Typography>
          <Typography className={classes.topicoS2}>A chave não é considerada atômica.</Typography>
          <Typography className={classes.topicoS2}>A busca é feita dígito a dígito.</Typography>
          <Typography className={classes.topicoS2}>O nó final da chave armazena o seu valor.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores digitais (Tries): definição">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Uma árvore digital para S é uma árvore m-ária T, não vazia, tal que:</Typography>
          <Typography className={classes.topicoS2}>(i) Seja v um nó de T, o j-ésimo filho de seu pai, então v corresponde ao dígito dj do alfabeto de S, <Math tex={String.raw`1 \leqslant j \leqslant m`}/>.</Typography>
          <Typography className={classes.topicoS2}>(ii) Para cada nó v, a sequência de dígitos definida pelo caminho desde a raiz de T a v corresponde a um prefixo de alguma chave de S.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores digitais (Tries): busca">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Navega na árvore dígito a dígito da chave.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores digitais (Tries): inserção">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Navega na árvore dígito a dígito da chave.</Typography>
          <Typography className={classes.topicoS2}>Caso o nó não exista, ele é criado.</Typography>
          <Typography className={classes.topicoS2}>O valor da chave é atribuído a último nó dela.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores digitais (Tries): remoção">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Navega na árvore dígito a dígito da chave.</Typography>
          <Typography className={classes.topicoS2}>Caso encontre valor para a chave, remove o valor.</Typography>
          <Typography className={classes.topicoS2}>Se o nó não tive filhos, remove todos os nós à partir de um nó pai que contenha valor.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores digitais (Tries): exemplo">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}><a href="https://www.cs.usfca.edu/~galles/visualization/Trie.html" target="_blank" rel="noreferrer">https://www.cs.usfca.edu/~galles/visualization/Trie.html</a></Typography>
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
