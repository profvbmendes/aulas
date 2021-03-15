export default function HideByStep(props) {
  const {visibleIn, step} = props;
  let visible = false;
  let ranges = visibleIn.split(',');
  for (let i = 0; i < ranges.length; i++) {
    let [start, end] = ranges[i].split('-');
    end = end !== undefined ? (end !== "" ? end : Infinity) : start;
    visible = visible || (step >= start && step <= end);
  }

  return <div style={{visibility: (visible?  'visible':'hidden')}}>
    {props.children}
  </div>
}