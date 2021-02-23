import { makeStyles } from '@material-ui/core';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';


const useStyles = makeStyles({
  shown: {
    fontFamily: "'PT Mono', Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    opacity: 1
  },
  fade: {
    fontFamily: "'PT Mono', Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    opacity: 0.4
  }
});


export default function ImdCodePane(props) {
  const classes = useStyles(props);
  const linesToHighlight = [];
  if (props.highlightLines !== undefined) {
    const intervals = String(props.highlightLines).split(',');
    
    intervals.forEach(interval => {
      let [start, end] = interval.split('-');
      start = parseInt(start, 10);
      end = end !== undefined ? parseInt(end, 10) : start;
      for (let i = start; i <= end; i++) {
        linesToHighlight.push(i);
      }
    });
  }
  return (
    <div class="imd-codepane">
      <SyntaxHighlighter
          style={atomDark}
          lineNumberStyle={{minWidth: '1.25em'}}
          showLineNumbers
          wrapLines
          lineProps={line => linesToHighlight.length === 0 || linesToHighlight.includes(line) ? {class: classes.shown} : {class: classes.fade}}
          language={props.language}>{props.children}</SyntaxHighlighter>
    </div>
  );  
}