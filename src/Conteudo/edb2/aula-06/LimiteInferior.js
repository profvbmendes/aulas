import { Box, makeStyles, Typography } from "@material-ui/core";
import Tree from 'react-d3-tree';
import { useSteps } from "spectacle/es/hooks/use-steps";
import Math from "../../../ImdCommons/Math";
import { themeBaseStyles } from "../../../styles";

const useStyles = makeStyles((theme, props) => ({
  ...themeBaseStyles(theme, props),
  treeRoot: {
    fontFamily: theme.typography.fontFamily,
    width: '100%', 
    flexGrow: 1
  },
}));


export default function LimiteInferior(props) {
  const classes = useStyles(props);
  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
        style={{textAlign: 'center'}}>
      <Typography className={classes.topicoS3}>A melhor complexidade possível para resolver determinado problema.</Typography>
      <Typography className={classes.topicoS3}>Em teoria, não deve ser possível desenvolver um algoritmo que tenha <span className={classes.emphasis}>complexidade de pior caso</span> menor que o <span className={classes.emphasis}>limite inferior</span> do problema que ele resolve.</Typography>
    </Box>);
}

export function ArvoreDecisao(props) {
  const classes = useStyles(props);
  const arvore = {
    name: 'a<b',
    children: [
      {
        name: 'b<c',
        children: [
          {
            name: 'a,b,c',
          },
          { 
            name: 'a<c',
            children: [
              {
                name: '{a,c,b}',
              },
              { 
                name: '{c,a,b}'
              }
            ]
          }
        ]
      },{
        name: 'b<c',
        children: [
          {
            name: 'a<c',
            children: [
              {
                name: '{b,a,c}',
              },
              { 
                name: '{b,c,a}'
              }
            ]
          },
          { 
            name: 'c,b,a',
          }
        ]
      }
    ]
  }
  let separation = 1;

  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="row"
        alignItems="stretch"
        justifyContent="space-evenly">
      <Box className={classes.treeRoot}>
          <Tree data={arvore}
            orientation="vertical"
            separation={{siblings: separation, nonSiblings: separation}}
            translate={{ y: 100, x: 650}}
          />
      </Box>
    </Box>);
}
export function ComplexidadeArvoreDecisao(props) {
  const classes = useStyles(props);
  const {step, placeholder: stepPlaceholder}  = useSteps(1, {});
  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
        style={{textAlign: 'center'}}>
      {stepPlaceholder}
      <Typography className={classes.topicoS3}>A complexidade de pior caso é a maior profundidade de uma folha.</Typography>
      <Typography className={classes.topicoS3}>Ou seja, a <span className={classes.emphasis}>altura</span> da árvore.</Typography>
      { step >= 0 && <Typography className={classes.topicoS3} style={{fontSize: '5em'}}><span className={classes.emphasis}><Math tex={String.raw`O(n \cdot \log{n})`}/></span></Typography> }
    </Box>);
}

export function AlgoritmoOtimo(props) {
  const classes = useStyles(props);
  const {step, placeholder: stepPlaceholder}  = useSteps(2, {});
  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly"
        style={{textAlign: 'center'}}>
      {stepPlaceholder}
      { step < 1 && <Typography className={classes.topicoS3}>Algoritmo  que tenha <span className={classes.emphasis}>limite superior</span> igual ao <span className={classes.emphasis}>limite inferior do problema</span> que ele resolve.</Typography> }
      { step >= 0 && <Typography className={classes.topicoS3}>Se um dado <Math tex={String.raw`I`}/> é limite inferior de um problema P, <Math tex={String.raw`\Omega(I)`}/>, e um dado algorítmo tem complexidade de pior caso <Math tex={String.raw`O(I)`}/>, então ele é considerado ótimo.</Typography> }
      { step >= 1 && <Typography className={classes.topicoS3}>O <i>Merge sort</i> é algoritmo ótimo para a solução do problema de ordenação por comparação?</Typography> }
    </Box>);
}
