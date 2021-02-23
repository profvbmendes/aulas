import MathJax from "@innodoc/react-mathjax-node";

export default function Math(props) {
  return (
    <MathJax.Provider>
      <div class="imd-math"><MathJax.MathJaxNode displayType="inline" texCode={props.tex}/></div>
    </MathJax.Provider>
  );
}