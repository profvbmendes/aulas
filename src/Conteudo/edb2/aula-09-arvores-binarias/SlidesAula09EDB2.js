import '../../../App.css';
import SlideInicial from '../../../ImdCommons/SlideInicial';
import { Box, List, makeStyles, Typography } from '@material-ui/core';
import { themeBaseStyles } from '../../../styles';
import ImdSlideDuvidas from '../../../ImdCommons/ImdSlideDuvidas';
import { useEffect } from 'react';
import SlideAgenda, { Topico } from '../../../ImdCommons/SlideAgenda';
import ImdSlide from '../../../ImdCommons/ImdSlide';
import { BuscaBinaria } from '../aula-07/BuscaBinaria';
import { ArvoreBinariaDefinicao, ArvoresBuscaBinaria } from '../aula-07/Arvores';
import Math from '../../../ImdCommons/Math';
import { arvoreBinaria, arvoreBinariaBusca, arvoreBinariaBuscaDesbalanceada, arvoreBinariaBuscaZigueZague, arvoreBinariaBuscaComFolha } from '../../../data/arvoreBinaria';
import { ImdVector } from '../../../ImdCommons/ImdVector';

const useStyles = makeStyles((theme, props) => (themeBaseStyles(theme, props)));

export function SlidesAula09EDB2(props) {
  const classes = useStyles(props);
  const orderedVector = [{value: 8}, {value: 12}, {value: 15}, {value: 18}, {value: 28}, {value: 45}, {value: 62}];

  useEffect(() => {
    document.title = "EDB2 - Aula 09 - Árvores Binárias de Busca"
  }, []);

  return (
    <>
      <SlideInicial
        codigoDisciplina="IMD0039"
        nomeDisciplina="Estruturas de Dados Básicas 2"
        assunto="Árvores Binárias de Busca"
        semestre="2020.2"
        />
      <SlideAgenda>
        <Topico>Árvore Binária de Busca</Topico>
        <Topico>Operações e complexidades</Topico>
        <Topico>Caminhos</Topico>
        <Topico>Árvores Balanceadas</Topico>
      </SlideAgenda>
      <ImdSlide heading="Árvore Binária de Busca">
        <ArvoresBuscaBinaria buscaBinaria={true}/>
      </ImdSlide>
      <ImdSlide heading="Árvore Binária: Definição">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>É uma <span className={classes.emphasis}>árvore binária</span> tal que:</Typography>
          <Typography className={classes.topicoS2}>A raiz possui uma chave</Typography>
          <Typography className={classes.topicoS2}>As chaves dos nós da subárvore <span className={classes.emphasis}>esquerda</span> da raiz são <span className={classes.emphasis}>menores</span> que a chave da raiz</Typography>
          <Typography className={classes.topicoS2}>As chaves dos nós da subárvore <span className={classes.emphasis}>direita</span> da raiz são <span className={classes.emphasis}>maiores</span> que a chave da raiz</Typography>
          <Typography className={classes.topicoS2}>As subárvores esquerda e direita são árvores binárias de busca</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore Binária de Busca: Exemplo">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvore={arvoreBinaria}/>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore Binária de Busca: Operações">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="left"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Busca</Typography>
          <Typography className={classes.topicoS2}>Inserção</Typography>
          <Typography className={classes.topicoS2}>Remoção</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore Binária de Busca: Busca">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Dada uma <span className={classes.emphasis}>coleção</span> de elementos previamente <span className={classes.emphasis}>ordenada</span></Typography>
          <Typography className={classes.topicoS2}><span className={classes.emphasis}>Encontrar</span> o elemento que contenha uma dada <span className={classes.emphasis}>chave</span></Typography>
          <Typography className={classes.topicoS3}><span className={classes.danger}>Qual algoritmo devemos utilizar?</span></Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore Binária de Busca: Busca">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ImdVector
            data={orderedVector}
            height={100}  />
          
          <Typography className={classes.topicoS3}><span className={classes.emphasis}>Busca Binária</span></Typography>
          <Typography className={classes.topicoS2}><span className={classes.danger}>Qual a complexidade?</span></Typography>
          <Typography className={classes.topicoS2}><span className={classes.danger}>Como transformamos esta coleção de elementos em uma árvore?</span></Typography>
        </Box>
      </ImdSlide>
      
      <ImdSlide heading="Árvore Binária de Busca: Busca">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ImdVector
            data={orderedVector}
            height={100}  />
          <ArvoresBuscaBinaria arvore={arvoreBinariaBusca}/>
          <Typography className={classes.topicoS2}><span className={classes.danger}>Qual a complexidade?</span></Typography>
        </Box>
      </ImdSlide>
      
      <ImdSlide heading="Árvore Binária de Busca: Busca">
        <Box display="flex"
            className={classes.root}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvore={arvoreBinariaBuscaDesbalanceada} zoom={0.65}/>
          <Typography className={classes.topicoS2}><span className={classes.danger}>Também é uma árvore binária de busca?</span></Typography>
        </Box>
      </ImdSlide>
      
      <ImdSlide heading="Árvore Binária de Busca: Busca">
        <Box display="flex"
            className={classes.root}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvore={arvoreBinariaBuscaZigueZague} zoom={0.65}/>
          <Typography className={classes.topicoS2}><span className={classes.danger}>Qual a complexidade?</span></Typography>
        </Box>
      </ImdSlide>
      
      <ImdSlide heading="Árvore Binária de Busca: Busca">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvore={arvoreBinariaBusca}/>
          <Typography className={classes.topicoS2}>Se a árvore binária de busca for <span className={classes.emphasis}>completa</span>, a complexidade da busca é <span className={classes.emphasis}><Math tex={String.raw`O(\log{n})`}/></span></Typography>
        </Box>
      </ImdSlide>
      
      <ImdSlide heading="Árvore Binária de Busca: Inserção">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvore={arvoreBinariaBusca}/>
          <Typography className={classes.topicoS2}><span className={classes.danger}>Qual o caminho para inserir o elemento 21 e manter as condições da árvore binária de busca?</span></Typography>
          <Typography className={classes.topicoS2}><span className={classes.danger}>Qual a complexidade?</span></Typography>
        </Box>
      </ImdSlide>
      
      <ImdSlide heading="Árvore Binária de Busca: Inserção">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvore={arvoreBinariaBuscaComFolha} zoom={0.75}/>
        </Box>
      </ImdSlide>
      
      <ImdSlide heading="Exercício">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Alterar o método de inserção na nossa árvore para que ela sempre seja uma árvore binária de busca.</Typography>
          <Typography className={classes.topicoS2}>O que acontece se inserirmos o vetor [{orderedVector.map(el => el.value).join(",")}] iterando sobre ele?</Typography>
        </Box>
      </ImdSlide>
      
      <ImdSlide heading="Árvore Binária de Busca: Remoção">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvore={arvoreBinariaBuscaComFolha} zoom={0.75}/>
          <Typography className={classes.topicoS2}><span className={classes.danger}>Qual o algoritmo para remover o elemento 8?</span></Typography>
          <Typography className={classes.topicoS2}><span className={classes.danger}>Qual a complexidade?</span></Typography>
        </Box>
      </ImdSlide>
      
      <ImdSlide heading="Árvore Binária de Busca: Remoção">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvore={arvoreBinariaBuscaComFolha} zoom={0.75}/>
          <Typography className={classes.topicoS2}><span className={classes.danger}>Qual o algoritmo para remover o elemento 28?</span></Typography>
          <Typography className={classes.topicoS2}><span className={classes.danger}>Qual a complexidade?</span></Typography>
        </Box>
      </ImdSlide>
      
      <ImdSlide heading="Árvore Binária de Busca: Remoção">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvore={arvoreBinariaBuscaComFolha} zoom={0.75}/>
          <Typography className={classes.topicoS2}><span className={classes.danger}>Qual o algoritmo para remover o elemento 18?</span></Typography>
          <Typography className={classes.topicoS2}><span className={classes.danger}>Qual a complexidade?</span></Typography>
        </Box>
      </ImdSlide>

      <ImdSlide heading="Exercício">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Alterar o método de remoção da nossa árvore para que ela sempre seja uma árvore binária de busca.</Typography>
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
