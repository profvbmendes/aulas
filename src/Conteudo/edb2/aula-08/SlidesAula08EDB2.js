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
import { arvoreBinaria, arvoreBinariaCompleta, arvoreEstritamenteBinaria } from '../../../data/arvoreBinaria';
import ImdCodePane from '../../../ImdCommons/ImdCodePane';
import { buscaOrdemSimetrica, buscaPreOrdem, buscaPosOrdem } from '../../../codes/percursos_arvore_binaria';

const useStyles = makeStyles((theme, props) => (themeBaseStyles(theme, props)));

export function SlidesAula08EDB2(props) {
  const classes = useStyles(props);

  useEffect(() => {
    document.title = "EDB2 - Aula 08 - Árvores Binárias"
  }, []);

  return (
    <>
      <SlideInicial
        codigoDisciplina="IMD0039"
        nomeDisciplina="Estruturas de Dados Básicas 2"
        assunto="Árvores Binárias"
        semestre="2020.2"
        />
      <SlideAgenda>
        <Topico>Árvore binária</Topico>
        <Topico>Propriedades de uma árvore binária</Topico>
        <Topico>Tipos de árvores binárias</Topico>
        <Topico>Percursos em árvores binárias</Topico>
      </SlideAgenda>
      <ImdSlide heading="Busca Binária">
        <BuscaBinaria/>
      </ImdSlide>
      <ImdSlide heading="Árvores">
        <ArvoresBuscaBinaria buscaBinaria={true}/>
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
      <ImdSlide heading="Árvore Binária: Subárvores vazias">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvoreBinariaSubarvoresVazias={true}/>
          <Typography className={classes.topicoS2}>O número de <span className={classes.emphasis}>subárvores</span> vazias de uma árvore binária com <Math tex={String.raw`n`}/> elementos é <span className={classes.emphasis}>sempre igual a <Math tex={String.raw`n+1`}/></span>.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore Binária: Subárvores vazias">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvoreBinariaSubarvoresVazias2={true}/>
          <Typography className={classes.topicoS2}>Com <span className={classes.emphasis}><Math tex={String.raw`n=6`}/></span>, o número de subárvores vazias é <span className={classes.emphasis}><Math tex={String.raw`7`}/></span>.</Typography>
          <Typography className={classes.topicoS2}>E se removermos um nó?</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore Binária: Subárvores vazias">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvoreBinariaSubarvoresVazias3={true}/>
          <Typography className={classes.topicoS2}>Com <span className={classes.emphasis}><Math tex={String.raw`n=5`}/></span>, o número de subárvores vazias é <span className={classes.emphasis}><Math tex={String.raw`6`}/></span>.</Typography>
          <Typography className={classes.topicoS2}><Math tex={String.raw`n = n-1`}/> e <Math tex={String.raw`T = n-1+2 = n-1`}/></Typography>
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
      <ImdSlide heading="Árvore Binária Ziguezague">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvoreZiguezague={true}/>
          <Typography className={classes.topicoS2}><span className={classes.emphasis}><Math tex={String.raw`h(T) = n`}/></span></Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore Binária Cheia: Altura">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvore={arvoreBinaria} binariaCompleta={true}/>
          <Typography className={classes.topicoS2}><span className={classes.danger}><Math tex={String.raw`h(T) = ?`}/></span></Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore Binária Cheia: Altura">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvore={arvoreBinaria} binariaCompleta={true}/>
          <Typography className={classes.topicoS2}><span className={classes.emphasis}><Math tex={String.raw`h(T) = 1 + \lfloor \log_2{n} \rfloor`}/></span></Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Árvore Binária: Altura mínima e máxima">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Altura mínima: <span className={classes.emphasis}><Math tex={String.raw`h(T) = 1 + \lfloor \log_2{n} \rfloor`}/></span></Typography>
          <Typography className={classes.topicoS2}>Altura máxima: <span className={classes.emphasis}><Math tex={String.raw`h(T) = n`}/></span></Typography>
          <Typography className={classes.topicoS2}><span className={classes.emphasis}><Math tex={String.raw`2^{h-1} \leq n \leq 2^h - 1`}/></span></Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Percurso em Árvore Binária">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Por <span className={classes.emphasis}>percurso</span> entende-se uma visita sistemática a cada um dos nós de uma árvore.</Typography>
          <Typography className={classes.topicoS2}>Percurso em <span className={classes.emphasis}>pré-ordem</span>.</Typography>
          <Typography className={classes.topicoS2}>Percurso em <span className={classes.emphasis}>ordem simétrica</span>.</Typography>
          <Typography className={classes.topicoS2}>Percurso em <span className={classes.emphasis}>pós-ordem</span>.</Typography>
          <Typography className={classes.topicoS2}>Percurso em <span className={classes.emphasis}>nível</span>.</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Percurso em pré-ordem">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ImdCodePane language="java">
            {buscaPreOrdem}
          </ImdCodePane>
          <ArvoresBuscaBinaria arvore={arvoreBinaria} withCode={true}/>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Percurso em pré-ordem">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ImdCodePane language="java">
            {buscaPreOrdem}
          </ImdCodePane>
          <ArvoresBuscaBinaria arvore={arvoreBinaria} withCode={true}/>
          <Typography className={classes.topicoS2}><span className={classes.emphasis}>Ordem de percurso:</span> A, B, D, E, C, F, G</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Percurso em ordem simétrica">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ImdCodePane language="java">
            {buscaOrdemSimetrica}
          </ImdCodePane>
          <ArvoresBuscaBinaria arvore={arvoreBinaria} withCode={true}/>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Percurso em ordem simétrica">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ImdCodePane language="java">
            {buscaOrdemSimetrica}
          </ImdCodePane>
          <ArvoresBuscaBinaria arvore={arvoreBinaria} withCode={true}/>
          <Typography className={classes.topicoS2}><span className={classes.emphasis}>Ordem de percurso:</span> D, B, E, A, F, C, G</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Percurso em pós-ordem">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ImdCodePane language="java">
            {buscaPosOrdem}
          </ImdCodePane>
          <ArvoresBuscaBinaria arvore={arvoreBinaria} withCode={true}/>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Percurso em pós-ordem">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ImdCodePane language="java">
            {buscaPosOrdem}
          </ImdCodePane>
          <ArvoresBuscaBinaria arvore={arvoreBinaria} withCode={true}/>
          <Typography className={classes.topicoS2}><span className={classes.emphasis}>Ordem de percurso:</span> D, E, B, F, G, C, A</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Percurso em nível">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <ArvoresBuscaBinaria arvore={arvoreBinaria} nivel={true}/>
          <Typography className={classes.topicoS2}><span className={classes.emphasis}>Ordem de percurso:</span> A, B, C, D, E, F, G</Typography>
        </Box>
      </ImdSlide>
      <ImdSlide heading="Exercício">
        <Box display="flex"
            className={classes.root}
            flexDirection="column"
            alignItems="center"
            justifyContent="space-evenly">
          <Typography className={classes.topicoS2}>Modificar a árvore implementada na aula passada para que ela seja binária.</Typography>
          <Typography className={classes.topicoS2}>Implementar os métodos de busca utilizando os percursos em <span className={classes.emphasis}>pré-ordem</span>, <span className={classes.emphasis}>ordem simétrica</span>, <span className={classes.emphasis}>pós-ordem</span> e em <span className={classes.emphasis}>nível</span>.</Typography>
          <Typography className={classes.topicoS2}>Implementar os métodos de impressão dos elementos da árvore em <span className={classes.emphasis}>pré-ordem</span>, <span className={classes.emphasis}>ordem simétrica</span>, <span className={classes.emphasis}>pós-ordem</span> e em <span className={classes.emphasis}>nível</span>.</Typography>
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
