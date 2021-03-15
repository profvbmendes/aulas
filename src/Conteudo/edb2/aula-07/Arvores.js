import { Box, makeStyles, Typography } from "@material-ui/core";
import { PermPhoneMsgTwoTone } from "@material-ui/icons";
import Tree from "react-d3-tree";
import Math from "../../../ImdCommons/Math";
import { themeBaseStyles } from "../../../styles";

const useStyles = makeStyles((theme, props) => ({
  ...themeBaseStyles(theme, props),
  treeRoot: (props) => ({
    fontFamily: theme.typography.fontFamily,
    width: props.relacoes ? '640px' : '100%', 
    height: '100%'
  }),
  nodeHighlight: {
    fill: theme.palette.highlight.main,
    stroke: 'none'
  },
  nodeFade: {
    fill: theme.palette.secondary.light,
    stroke: 'none'
  },
  node: {
    fill: theme.palette.secondary.main,
    stroke: 'none'
  },
  nodeText: {
    fill: 'white',
    fontSize: '1.5em',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold',
    stroke: 'none'
  },
  boldLink: {
    stroke: theme.palette.danger.main + ' !important',
    strokeWidth: '2px'
  }
}));

export function ArvoresBuscaBinaria(props) {
  
  function formulaBalloon(formula, width, options) {
    const formulaWithArrow = (options && options.pos === 'right') ? String.raw`\longleftarrow ${formula}` : String.raw`${formula} \longrightarrow `;
    const x = (options && options.pos === 'right') ? 40 : - width - 40;
    return {
      content: () => (
        <div>
          <Math tex={formulaWithArrow}/>
        </div>),
      width: width,
      height: 50,
      x: x,
      y: -10
    }
  }

  const classes = useStyles(props);
  let arvore;
  let x = 640;
  let y = 100;
  let size = 60;
  let linkClass = () => classes.linkClass;
  if (props.arvore) {
    arvore = props.arvore;
  } else if (props.buscaBinaria) {
    arvore = {
      name: '18',
      children: [
        {
          name: '12',
          children: [
            {
              name: '8',
            },
            { 
              name: '15',
            }
          ]
        },{
          name: '45',
          children: [
            {
              name: '28',
            },
            { 
              name: '62',
            }
          ]
        }
      ]
    }
  } else {
    arvore = {
      name: 'A',
      children: [
        {
          name: 'B',
          children: [
            {
              name: 'E',
            },
            { 
              name: 'F',
            }
          ]
        },{
          name: 'C',
          children: [
            {
              name: 'G',
            }
          ]
        },{
          name: 'D'
        }
      ]
    }
  }
  let separation = 1, zoom = 1;

  if(props.raiz) {
    arvore.attributes = {highlight: true, balloon: formulaBalloon('r', 40)};
  }
  
  if(props.subarvore) {
    arvore.children[0].attributes = {highlight: true}
    arvore.children[0].children[0].attributes = {highlight: true};
    arvore.children[0].children[1].attributes = {highlight: true};
    arvore.children[0].attributes.balloon = formulaBalloon('T_B', 60);
  }
  
  if(props.subarvore2) {
    arvore.children[0].children[0].attributes = {highlight: true};
    arvore.children[0].children[0].attributes.balloon = formulaBalloon('T_E', 60);
  }
  
  if(props.folhas) {
    arvore.children[0].children[0].attributes = {highlight: true};
    arvore.children[0].children[1].attributes = {highlight: true};
    arvore.children[1].children[0].attributes = {highlight: true};
    arvore.children[2].attributes = {highlight: true};
  }

  if(props.caminhos) {
    linkClass = ({ source, target }, orientation) => {
      if (target.data.name === 'B' || target.data.name === 'F') return classes.boldLink;
      else return classes.linkClass;
    }
    y = 50;
  }
  
  if(props.grau || props.grauArvore) {
    arvore.attributes = {balloon: formulaBalloon('2', 50)};
    arvore.children[0].attributes = {balloon: formulaBalloon('2', 50)};
    arvore.children[1].attributes = {balloon: formulaBalloon('3', 50)};
    arvore.children[1].children = [
      {name: 'G', attributes: {balloon: formulaBalloon('0', 50)}},
      {name: 'H', attributes: {balloon: formulaBalloon('0', 50)}},
      {name: 'I', attributes: {balloon: formulaBalloon('0', 50)}},
    ];
    arvore.children[0].children[0].attributes = {balloon: formulaBalloon('0', 50)};
    arvore.children[0].children[1].attributes = {balloon: formulaBalloon('0', 50)};
    arvore.children[1].children[0].attributes = {balloon: formulaBalloon('0', 50)};
    delete(arvore.children[2]);
    separation = 1.3;
    y = 50;
    size = 48;
  }
  
  if(props.grauArvore) {
    arvore.attributes = {balloon: formulaBalloon(String.raw`\text{?}`, 40)};
    arvore.children[0].attributes = {balloon: formulaBalloon(String.raw`\text{Binária}`, 100)};
    arvore.children[1].attributes = {balloon: formulaBalloon(String.raw`\text{Ternária}`, 110)};
    arvore.children[0].children[0].attributes = {};
    arvore.children[0].children[1].attributes = {};
    arvore.children[1].children[0].attributes = {};
    arvore.children[1].children[1].attributes = {};
    arvore.children[1].children[2].attributes = {};
    separation = 2;
    y = 50;
  }

  if(props.altura) {

    arvore.attributes = {balloon: formulaBalloon('h = 3', 80)}
    arvore.children[0].attributes = {balloon: formulaBalloon('h = 2', 80)}
    arvore.children[0].children[0].attributes = {balloon: formulaBalloon('h = 1', 80)}
    arvore.children[2].attributes = {balloon: formulaBalloon('h = 1', 80, {pos: 'right'})}
  }

  if(props.nivel) {

    arvore.attributes = {balloon: formulaBalloon('nível = 0', 110)}
    arvore.children[0].attributes = {balloon: formulaBalloon('nível = 1', 110)}
    arvore.children[0].children[0].attributes = {balloon: formulaBalloon('nível = 2', 110)}
    if (arvore.children[2]) arvore.children[2].attributes = {balloon: formulaBalloon('nível = 1', 110, {pos: 'right'})}
  }

  if(props.relacoes) {
    zoom = 0.9;
    x = 320;
  }

  if(props.estritamenteBinaria) {
    arvore.attributes = {balloon: formulaBalloon('grau = 2', 110)}
    arvore.children[0].attributes = {balloon: formulaBalloon('grau = 0', 110)}
    arvore.children[1].attributes = {balloon: formulaBalloon('grau = 2', 110)}
    arvore.children[1].children[0].attributes = {balloon: formulaBalloon('grau = 0', 110)}
    arvore.children[1].children[1].attributes = {balloon: formulaBalloon('grau = 2', 110)}
    arvore.children[1].children[1].children[0].attributes = {balloon: formulaBalloon('grau = 0', 110)}
    arvore.children[1].children[1].children[1].attributes = {balloon: formulaBalloon('grau = 0', 110)}
    zoom=0.75;
    separation = 1.5;
  }
  
  if (props.binariaCompleta) {
    zoom = 0.75;
  }

  if(props.arvoreBinariaSubarvoresVazias) {
    arvore.children = [{name: '1', attributes: {fade: true}}, {name: '2', attributes: {fade: true}}];
  }
  if (props.arvoreBinariaSubarvoresVazias2) {
    zoom = 0.75;
    arvore.children[0].children[0].children = [{name: '1', attributes: {fade: true}}, {name: '2', attributes: {fade: true}}];
    arvore.children[0].children[1].children = [{name: '3', attributes: {fade: true}}, {name: '4', attributes: {fade: true}}];
    arvore.children[1].children[0].children = [{name: '5', attributes: {fade: true}}, {name: '6', attributes: {fade: true}}];
    arvore.children[1].children[1] = {name: '7', attributes: {fade: true}};
    delete arvore.children[2];
  }
  if (props.arvoreBinariaSubarvoresVazias3) {
    zoom = 0.75;
    arvore.children[0].children[0].children = [{name: '1', attributes: {fade: true}}, {name: '2', attributes: {fade: true}}];
    arvore.children[0].children[1].children = [{name: '3', attributes: {fade: true}}, {name: '4', attributes: {fade: true}}];
    arvore.children[1].children = [{name: '5', attributes: {fade: true}}, {name: '6', attributes: {fade: true}}];
    delete arvore.children[2];
  }

  if (props.arvoreZiguezague) {
    delete arvore.children[0].children[1]
    delete arvore.children[2];
    delete arvore.children[1];
  }

  if (props.withCode) {
    zoom = 0.75;
  }

  return (
      <Box className={classes.treeRoot}>
          <Tree data={arvore}
            orientation="vertical"
            pathClassFunc={linkClass}
            separation={{siblings: separation, nonSiblings: separation}}
            translate={{ y, x}}
            zoom={zoom}
            renderCustomNodeElement={(param, appState) => {
              const fade = param.nodeDatum.attributes && param.nodeDatum.attributes.fade;
              const highlight = param.nodeDatum.attributes && param.nodeDatum.attributes.highlight;
              const balloon = param.nodeDatum.attributes && param.nodeDatum.attributes.balloon;
              return (
                <>
                  <g>
                    <circle x={size/2} y={size/2} className={highlight ? classes.nodeHighlight : fade ? classes.nodeFade : classes.node} r={size/2}/>
                    <text dominantBaseline="middle" textAnchor="middle" className={classes.nodeText}>{param.nodeDatum.name}</text>
                    { balloon ? <foreignObject x={balloon.x} y={balloon.y} width={balloon.width} height={balloon.height}>{balloon.content()}</foreignObject> : ''}
                  </g>
                </>
              );
            }}
          />
      </Box>);
}


export function ArvoresConceitos(props) {
  const classes = useStyles(props);
  
  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignItems="center"
        justifyContent="space-evenly">
      <Typography className={classes.topicoS2}>Conjunto de finito de elementos chamados de <span className={classes.emphasis}>vértices ou nós</span>.</Typography>
      <Typography className={classes.topicoS2}>Árvore vazia: <span className={classes.emphasis}><Math tex={String.raw`T = \varnothing`}/></span></Typography>
      <Typography className={classes.topicoS2}>Referenciada pela sua <span className={classes.emphasis}>raiz r</span></Typography>
      <Typography className={classes.topicoS2}>Cada nó pode ter de <span className={classes.emphasis}>0 a m nós filhos</span>.</Typography>
      <Typography className={classes.topicoS2}>Para cara nó <Math tex={String.raw`v`}/> descendente de <Math tex={String.raw`r`}/>, existe uma <span className={classes.emphasis}>subárvore de <Math tex={String.raw`T`}/> chamada de <Math tex={String.raw`T_v`}/></span>.</Typography>
    </Box>);
}
export function ArvoresDefinicao(props) {
  const classes = useStyles(props);
  
  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignItems="left"
        justifyContent="space-evenly">
      <Typography className={classes.topicoS2}>Uma <span className={classes.emphasis}>árvore enraizada T</span>, ou simplesmente árvore, é um conjunto finito de elementos denominados nós ou vértices tais que</Typography>
      <Typography className={classes.topicoS2}>T = Ø, e a árvore é dita vazia, ou</Typography>
      <Typography className={classes.topicoS2}>existe um nó especial chamado raiz de T(r(T)); os restantes constituem um único conjunto vazio ou são
        divididos em m ≥ 1 conjuntos disjuntos não vazios, as subárvores de r(T), ou simplesmente subárvores,
        cada qual, por sua vez, uma árvore.</Typography>
    </Box>);
}
export function ArvoreBinariaDefinicao(props) {
  const classes = useStyles(props);
  
  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignItems="left"
        justifyContent="space-evenly">
      <Typography className={classes.topicoS2}>Uma <span className={classes.emphasis}>árvore binária T</span> é um conjunto finito de elementos denominados nós ou vértices, tal que</Typography>
      <Typography className={classes.topicoS2}>T = Ø, e a árvore é dita vazia, ou</Typography>
      <Typography className={classes.topicoS2}>existe um nó especial chamado raiz de T(r(T)), e os restantes podem ser divididos em <span className={classes.emphasis}>dois subconjuntos
        disjuntos, TE(r(T)) e TD(r(T))</span>, a subárvore esquerda e a direita da raiz, respectivamente, as quais são
        também árvores binárias.</Typography>
    </Box>);
}