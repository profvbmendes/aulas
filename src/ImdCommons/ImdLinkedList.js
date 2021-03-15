import { makeStyles } from "@material-ui/core";
import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { themeBaseStyles } from "../styles";

const useStyles = makeStyles((theme, props) => ({
  ...themeBaseStyles(theme, props),
  nodeText: {
    fill: 'white',
    fontSize: '1.5em',
    fontFamily: theme.typography.fontFamily
  },
  highlightText: {
    fill: 'white',
    fontSize: '1.5em',
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'bold'
  },
  nodeCircle: {
    fill: theme.palette.secondary.main
  },
  highlightCircle: {
    fill: theme.palette.secondary.light
  },
  lines: {
    stroke: theme.palette.secondary.main,
    strokeSize: '1px'
  }
}));

export function ImdLinkedList(props) {
  const classes = useStyles(props);
  let { data, nodeSize, spacing, width, height } = props;
  width = width || 600;
  height = height || 500;
  nodeSize = nodeSize || 60;
  spacing = spacing || 30;

  const refContainer = useRef(null)

  useEffect(() => {
    d3.select(refContainer.current)
      .select("svg")
      .remove();
    const svg = d3.select(refContainer.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height);
    const startX = width/2 - (data.length/2)*nodeSize - ((data.length -1)/2)*spacing + nodeSize/2;
    const startY = height/2;
    for (let i = 0; i < data.length; i++) {
      const center = [startX + (nodeSize + spacing)*i, startY]
      if(i < data.length-1) {
        svg.append('line')
          .attr('x1', center[0])
          .attr('y1', center[1])
          .attr('x2', center[0]+nodeSize/2+spacing)
          .attr('y2', center[1])
          .attr('class', classes.lines);
        svg.append('line')
          .attr('x1', center[0]+nodeSize/2+spacing-spacing/2)
          .attr('y1', center[1]-spacing/4)
          .attr('x2', center[0]+nodeSize/2+spacing)
          .attr('y2', center[1])
          .attr('class', classes.lines);
        svg.append('line')
          .attr('x1', center[0]+nodeSize/2+spacing-spacing/2)
          .attr('y1', center[1]+spacing/4)
          .attr('x2', center[0]+nodeSize/2+spacing)
          .attr('y2', center[1])
          .attr('class', classes.lines);
      }
      let g = svg.append('g')
        .attr('transform', 'translate('+center[0]+','+center[1]+')');
      g.append('circle')
        .attr('r', nodeSize/2)
        .attr('class', data[i].highlight ? classes.highlightCircle : classes.nodeCircle);
      g.append('text')
        .attr('text-anchor', 'middle')
        .attr('dy', '.3em')
        .attr('alignment-baseline', 'middle')
        .attr('class', data[i].highlight ? classes.highlightText : classes.nodeText)
        .text(data[i].value);
    }
    
  }, [data, height, nodeSize, spacing, width, classes.highlightCircle, classes.highlightText, classes.lines, classes.nodeCircle, classes.nodeText]);

  return (
    <div ref={refContainer}>
    </div>
  );
}