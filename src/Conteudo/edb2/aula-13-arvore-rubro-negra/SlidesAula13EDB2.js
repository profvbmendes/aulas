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

export function SlidesAula13EDB2(props) {
  const classes = useStyles(props);

  useEffect(() => {
    document.title = "EDB2 - Aula 13 - Árvore Rubro-Negra"
  }, []);

  return (
    <>
      <SlideInicial
        codigoDisciplina="IMD0039"
        nomeDisciplina="Estruturas de Dados Básicas 2"
        assunto="Árvore Rubro-Negra"
        semestre="2020.2"
        />
      <SlideAgenda>
        <Topico>Árvores Graduadas</Topico>
        <Topico>Árvores Rubro-Negras</Topico>
        <Topico>Operações em Árvores Rubro-Negras</Topico>
      </SlideAgenda>
      <ImdSlide heading="Árvore Graduadas">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Uma <span className={classes.emphasis}>árvore graduada</span> é uma árvore binária de busca.</Typography>
          <Typography className={classes.topicoS2}>Para cada nó v da árvore, existe um número inteiro chamado de <span className={classes.emphasis}>posto(v)</span>.</Typography>
          <Typography className={classes.topicoS2}>Se v é um nó externo, então <Math tex={String.raw`posto(v) = 0`}/>.</Typography>
          <Typography className={classes.topicoS2}>Se v é pai de um nó externo, então <Math tex={String.raw`posto(v) = 1`}/>.</Typography>
          <Typography className={classes.topicoS2}>Se v possui pai w, então <Math tex={String.raw`posto(v) \leqslant posto(w) \leqslant posto(v) +  1`}/>.</Typography>
          <Typography className={classes.topicoS2}>Se v possui avô w, então <Math tex={String.raw`posto(v) < posto(w)`}/>.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore Graduadas: exemplo">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvore={arvoreGraduada} zoom={0.6}/>
          <Typography className={classes.topicoS2}>Esta árvore é AVL?</Typography>
          <Typography className={classes.topicoS2}>Esta árvore é graduada?</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore Rubro-Negra">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Um nó pode ser <span className={classes.emphasis}>vermelho</span> ou <span className={classes.emphasis}>preto</span>.</Typography>
          <Typography className={classes.topicoS2}>A <span className={classes.emphasis}>raiz e as folhas vazias</span> são nós <span className={classes.emphasis}>pretos</span>.</Typography>
          <Typography className={classes.topicoS2}>Se um nó é <span className={classes.emphasis}>vermelho</span>, então os seus filhos <span className={classes.emphasis}>são pretos</span>.</Typography>
          <Typography className={classes.topicoS2}>Todos os caminhos à partir de um nó até os seus descendentes que são folhas vazias possuem o <span className={classes.emphasis}>mesmo número de nós pretos</span>.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore Rubro-Negra: exemplo">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          
          <ArvoresBuscaBinaria arvore={arvoreRubroNegraSemCor} zoom={0.75}/>
          <Typography className={classes.topicoS2}>Esta árvore é Rubro-Negra?</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Graduada → Rubro-Negra">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>O nó raiz é sempre preto.</Typography>
          <Typography className={classes.topicoS2}>Se v possui pai w, e <Math tex={String.raw`posto(v) == posto(w)`}/>, então v é vermelho.</Typography>
          <Typography className={classes.topicoS2}>Senão, v é preto.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Graduada → Rubro-Negra">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          
          <ArvoresBuscaBinaria arvore={arvoreRubroNegraSemCor} zoom={0.75}/>
          <Typography className={classes.topicoS2}>Esta árvore é Rubro-Negra?</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore Rubro-Negra: exemplo">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          
          <ArvoresBuscaBinaria arvore={arvoreRubroNegra} zoom={0.75}/>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Rubro-Negra → Graduada">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Se o nó v é externo, então <Math tex={String.raw`posto(v) = 0`}/>.</Typography>
          <Typography className={classes.topicoS2}>Se v possui pai w e v é vermelho, então <Math tex={String.raw`posto(w) = posto(v)`}/>.</Typography>
          <Typography className={classes.topicoS2}>Se v possui pai w e v é preto, então <Math tex={String.raw`posto(w) = posto(v) + 1`}/>.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Rubro-Negra → Graduada">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          
          <ArvoresBuscaBinaria arvore={arvoreRubroNegra} zoom={0.75}/>
        </Box>
      </ImdSlide>
      
      <ImdSlide heading="Propriedades">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>O posto de um nó em uma Árvore Rubro-Negra é a quantidade de nós pretos entre ele e um nó externo.</Typography>
          <Typography className={classes.topicoS2}>A altura h de um nó v em uma Árvore Graduada é tal que <Math tex={String.raw`h(v) \leqslant 2 \cdot posto(v)`}/>.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores Rubro-Negras: operações">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Busca.</Typography>
          <Typography className={classes.topicoS2}>Inserção.</Typography>
          <Typography className={classes.topicoS2}>Remoção.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores Rubro-Negras: inserção">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>1. Realiza a busca da posição onde o nó deve ser inserido.</Typography>
          <Typography className={classes.topicoS2}>2. Marca o nó como vermelho.</Typography>
          <Typography className={classes.topicoS2}>3. Verifica a necessidade de rotação ou mudança de cor do nó.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores Rubro-Negras: definições">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <img src={rnDefinicoes} alt="Árvore Rubro-Negras: definições"/>
          <Typography className={classes.topicoS2}><span className={classes.emphasis}>q</span> é o nó inserido; <span className={classes.emphasis}>v</span> é o pai de q; <span className={classes.emphasis}>w</span> é o avô de q; <span className={classes.emphasis}>t</span> é o tio de q.</Typography>
        </Box>
      </ImdSlide>
      {/* q = Z, v = A, w = B, t = D */}
      <ImdSlide heading="Árvores Rubro-Negras: cenários">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>1. <span className={classes.emphasis}>q</span> é a raiz.</Typography>
          <Typography className={classes.topicoS2}>2. <span className={classes.emphasis}>t</span> é o tio de q e é vermelho.</Typography>
          <Typography className={classes.topicoS2}>3. <span className={classes.emphasis}>t</span> é o tio de q e é preto e eles formam um triângulo.</Typography>
          <Typography className={classes.topicoS2}>4. <span className={classes.emphasis}>t</span> é o tio de q e é preto e eles formam uma linha.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores Rubro-Negras: cenário 1">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>1. <span className={classes.emphasis}>q</span> é a raiz.</Typography>
          <Typography className={classes.topicoS2}>Solução: trocar a cor de q.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores Rubro-Negras: cenário 2">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>2. <span className={classes.emphasis}>t</span> é o tio de q e é vermelho.</Typography>
          <img src={rnDefinicoesCenario2} alt="Árvore Rubro-Negras: cenário 2"/>
          <Typography className={classes.topicoS2}>Solução: trocar as cores do pai de q (v), do avô de q (w) e do tio de q (t).</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores Rubro-Negras: cenário 3">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>3. <span className={classes.emphasis}>t</span> é o tio de q e é preto e eles formam um triângulo.</Typography>
          <img src={rnDefinicoesTriangulo} alt="Árvore Rubro-Negras: cenário 3"/>
          <Typography className={classes.topicoS2}>Solução: rotaciona q para a posição de v para que forme uma linha.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores Rubro-Negras: cenário 4">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>4. <span className={classes.emphasis}>t</span> é o tio de q e é preto e eles formam uma linha.</Typography>
          <img src={rnDefinicoes} alt="Árvore Rubro-Negras: cenário 4"/>
          <Typography className={classes.topicoS2}>Solução: rotaciona v para a posição de w e troca as cores de v e w.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores Rubro-Negras: rotações">
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
      <ImdSlide heading="Árvores Rubro-Negras: rotação simples à direita">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <img src={rnSimplesDireita} alt="Árvore Rubro-Negras: rotação simples à direita"/>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores Rubro-Negras: rotação dupla à direita">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <img src={rnDuplaDireita} alt="Árvore Rubro-Negras: rotação dupla à direita"/>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores Rubro-Negras: rotação simples à esquerda">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <img src={rnSimplesEsquerda} alt="Árvore Rubro-Negras: rotação simples à esquerda"/>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores Rubro-Negras: rotação dupla à esquerda">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <img src={rnDuplaEsquerda} alt="Árvore Rubro-Negras: rotação dupla à esquerda"/>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvores Rubro-Negras: demonstração">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}><a href="https://www.inf.ufsc.br/~aldo.vw/estruturas/simulador/RB.html" target="_blank" rel="noreferrer">https://www.inf.ufsc.br/~aldo.vw/estruturas/simulador/RB.html</a></Typography>
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
