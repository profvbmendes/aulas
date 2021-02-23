import { Box, makeStyles } from "@material-ui/core";
import Tree from 'react-d3-tree';
import { useSteps } from "spectacle/es/hooks/use-steps";
import { arvoreMergeSort } from "../../data/arvoreMergeSort";
import { baseStyles } from "../../styles";

const useStyles = makeStyles((theme, props) => ({
  ...baseStyles,
  treeRoot: {
    fontFamily: theme.typography.fontFamily,
    width: '100%', 
    flexGrow: 1
  },
  vectorElementRect: {
    fill: theme.palette.secondary.light,
    width: "100%",
    height: "100%",
    strokeWidth:1, 
    stroke: 'white'
  },
  vectorElementRectHighlight: {
    fill: theme.palette.secondary.main,
    width: "100%",
    height: "100%",
    strokeWidth:1, 
    stroke: 'white'
  },
  vectorElementText: {
    stroke: 'white',
    fontWeight: 100,
    fontSize: '1.5em'
  }
}));

export default function MergeSortExample(props) {
  const classes = useStyles(props);
  const arvore = JSON.parse(JSON.stringify(arvoreMergeSort));
  let elementSize = 60;
  let separation = 2;

  const {step, placeholder: stepPlaceholder} = useSteps(29, {});
  if (step < 0) {
    arvore.attributes.highlight = true;
    arvore.children = [];
    elementSize = 100;
  }
  const highlightNode = function (step, start, parentNode, path) {
    if (step === start) {
      let node = parentNode;
      for (let i=0; i<path.length;i++) {
        if (node.children) {
          node = node.children[path[i]];
        }
      }
      node.attributes.highlight = true;
    }
  }
  highlightNode(step, 0, arvore, [0]);
  highlightNode(step, 1, arvore, [0,0]);
  highlightNode(step, 2, arvore, [0,0]);
  highlightNode(step, 3, arvore, [0,1]);
  
  highlightNode(step, 9, arvore, [1]);
  highlightNode(step, 10, arvore, [1,0]);
  highlightNode(step, 11, arvore, [1,1]);
  highlightNode(step, 12, arvore, [1,1]);
  if (step === 0) {
    arvore.children[0].children = [];
  }
  if (step >= 2) {
    arvore.children[0].children[0].attributes.vetor = [7, 11];
  }
  if (step >= 12) {
    arvore.children[1].children[1].attributes.vetor = [6, 8];
  }
  const mergeSteps = function(step, start, parentNode) {
    if (step >= start) {
      let length = parentNode.attributes.vetor.length;
      let vetorSorted = [...parentNode.attributes.vetor].sort((a,b) => a-b);
      if (step === start) {
        parentNode.attributes.highlightIndex = 0;
        parentNode.children[0].attributes.highlightIndex = 0;
        parentNode.children[1].attributes.highlightIndex = 0;
      }
      for (let i=0; i < length; i++) {
        if (step >= start + 1 + i) {
          parentNode.attributes.vetor[i] = vetorSorted[i];
        }
        if (step === start + 1 + i) {
          parentNode.attributes.highlightIndex = i+1;
          parentNode.children.forEach(child => {
            let j = i, found = false;
            while (j >= 0 && !found) {
              let value = parentNode.attributes.vetor[j],
                  pos = child.attributes.vetor.indexOf(value);
              console.log(value, i,j,pos);
              if(pos >= 0) {
                child.attributes.highlightIndex = pos+1;
                found = true;
              }
              j--;
            }
            if (!found) {
              child.attributes.highlightIndex = 0;
            }
          });
        }
      }
      if (step === start + length) {
        parentNode.attributes.highlight = true;
      }
    }
  }
  if (step >= 0 && step < 10) {
    arvore.children[1].children = [];
  }
  mergeSteps(step, 4, arvore.children[0]);
  mergeSteps(step, 13, arvore.children[1]);
  mergeSteps(step, 18, arvore);
  
  if (step === 27) {
    arvore.attributes.highlight = true;
    arvore.children = [];
    elementSize = 100;
  }

  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignItems="stretch"
        justifyContent="space-evenly">
      <Box className={classes.treeRoot}>
          {stepPlaceholder}
          <Tree data={arvore}
            orientation="vertical"
            renderCustomNodeElement={(param, appState) => {
              let vetor = param.nodeDatum.attributes.vetor;
              const highlight = param.nodeDatum.attributes.highlight;
              const highlightIndex = param.nodeDatum.attributes.highlightIndex;
              let size = elementSize;
              let start = -size*vetor.length/2;
              
              return (
                <>
                  {vetor.map((element, i) => (
                    <svg x={start + i * size} y={-size/2} width={size} height={size}>
                      <rect className={highlight || highlightIndex === i ? classes.vectorElementRectHighlight : classes.vectorElementRect}></rect>
                      <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className={classes.vectorElementText}>{element}</text>
                    </svg>
                  ))}
                </>
              )}}
            separation={{siblings: separation, nonSiblings: separation}}
            translate={{ y: 100, x: 650}}
          />
      </Box>
    </Box>);
}
