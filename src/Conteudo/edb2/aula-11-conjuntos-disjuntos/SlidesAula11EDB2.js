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

const useStyles = makeStyles((theme, props) => (themeBaseStyles(theme, props)));

export function SlidesAula11EDB2(props) {
  const classes = useStyles(props);
  const orderedVector = [{value: 8}, {value: 12}, {value: 15}, {value: 18}, {value: 28}, {value: 45}, {value: 62}];

  useEffect(() => {
    document.title = "EDB2 - Aula 11 - Conjuntos Disjuntos"
  }, []);

  return (
    <>
      <SlideInicial
        codigoDisciplina="IMD0039"
        nomeDisciplina="Estruturas de Dados Básicas 2"
        assunto="Conjuntos Disjuntos"
        semestre="2020.2"
        />
      <SlideAgenda>
        <Topico>Conjuntos Disjuntos</Topico>
        <Topico>Operações</Topico>
        <Topico>Complexidade</Topico>
      </SlideAgenda>
      <ImdSlide heading="Conjuntos disjuntos">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Elementos que pertencem a um domínio com <span className={classes.emphasis}>n</span> elementos.</Typography>
          <Typography className={classes.topicoS2}>Vamos desenhar.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Conjuntos disjuntos: operações">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}><span className={classes.emphasis}>gerar(n)</span> cria um conjuto com um único elemento para cada elemento <span className={classes.emphasis}>x</span> do universo.</Typography>
          <Typography className={classes.topicoS2}><span className={classes.emphasis}>buscar(x)</span> obtém o nome do conjunto ao qual o elemento <span className={classes.emphasis}>x</span> pertence.</Typography>
          <Typography className={classes.topicoS2}><span className={classes.emphasis}>fundir(x, y)</span> realiza a união entre os conjuntos <span className={classes.emphasis}>x e y</span>.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Conjuntos disjuntos: gerar">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Vamos desenhar.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Conjuntos disjuntos: fundir">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Vamos desenhar.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Conjuntos disjuntos: buscar">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Vamos desenhar.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Conjuntos disjuntos: fusão por tamanho">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>A fusão ocorre sempre do nó com menor altura diretamente na raiz do nó com maior altura.</Typography>
          <Typography className={classes.topicoS2}>O resultado da fusão de duas árvores de alturas distintas terá a altura da árvore com maior altura.</Typography>
          <Typography className={classes.topicoS2}>O resultado da fusão de duas árvores de alturas iguais terá a altura das árvores + 1.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Conjuntos disjuntos: fundir">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}><span className={classes.danger}>Sem</span> fusão por tamanho</Typography>
          <Typography className={classes.topicoS2}>fundir(1,2); fundir(7,8);</Typography>
          <Typography className={classes.topicoS2}>fundir(6,7); fundir(5,6);</Typography>
          <Typography className={classes.topicoS2}>fundir(4,5); fundir(3,4);</Typography>
          <Typography className={classes.topicoS2}>fundir(1,3);</Typography>
          <Typography className={classes.topicoS2}>Vamos desenhar.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Conjuntos disjuntos: fundir">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}><span className={classes.danger}>Com</span> fusão por tamanho</Typography>
          <Typography className={classes.topicoS2}>fundir(1,2); fundir(7,8);</Typography>
          <Typography className={classes.topicoS2}>fundir(6,7); fundir(5,6);</Typography>
          <Typography className={classes.topicoS2}>fundir(4,5); fundir(3,4);</Typography>
          <Typography className={classes.topicoS2}>fundir(1,3);</Typography>
          <Typography className={classes.topicoS2}>Vamos desenhar.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Conjuntos disjuntos: compressão de caminhos">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Vamos desenhar.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Conjuntos disjuntos: complexidade">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}><span className={classes.emphasis}>m</span> operações gerar, fundir e buscar.</Typography>
          <Typography className={classes.topicoS2}><span className={classes.emphasis}>n</span> operações gerar.</Typography>
          <Typography className={classes.topicoS2}><span className={classes.emphasis}><Math tex={String.raw`O(m\alpha(n))`}/></span> operações gerar.</Typography>
          <Typography className={classes.topicoS2}><span className={classes.emphasis}><Math tex={String.raw`\alpha( )`}/></span> é a função inversa da função de Ackerman.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Conjuntos disjuntos: complexidade">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>
            <Math tex={String.raw`A(i,j) = \begin{cases}
                  2 \cdot j & i == j \\
                  2 & j == 1 \\
                  A(i-1, A(i, j - 1)) & \text{caso contrário}
                \end{cases}`}/>
          </Typography>
          <Typography className={classes.topicoS2}><Math tex={String.raw`A(1,1) = 2`}/></Typography>
          <Typography className={classes.topicoS2}><Math tex={String.raw`A(1,j+1) = A(0, A(1,j)) = 2A(1,j) \text{para j >= 1}`}/></Typography>
          <Typography className={classes.topicoS2}><Math tex={String.raw`A(1,j) = 2^j \text{para todo j}`}/></Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Conjuntos disjuntos: complexidade">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}><Math tex={String.raw`A(2,1) = 2`}/></Typography>
          <Typography className={classes.topicoS2}><Math tex={String.raw`A(2,j+1) = A(1, A(2,j)) = 2^{A(2,j)} \text{para j >= 1}`}/></Typography>
          <Typography className={classes.topicoS2}><Math tex={String.raw`A(2,1) = 2`}/></Typography>
          <Typography className={classes.topicoS2}><Math tex={String.raw`A(2,2) = 4`}/></Typography>
          <Typography className={classes.topicoS2}><Math tex={String.raw`A(2,3) = 16`}/></Typography>
          <Typography className={classes.topicoS2}><Math tex={String.raw`A(2,4) = 65536`}/></Typography>
          <Typography className={classes.topicoS2}><Math tex={String.raw`A(2,j) = 2^{2^{.^{.^{.^{2}}}}}`}/></Typography>
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
