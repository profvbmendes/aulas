import { makeStyles } from "@material-ui/core";
import { baseStyles } from "../styles";

const useStyles = makeStyles((theme, props) => ({
  ...baseStyles,
  complexity: {
    textAlign: 'center'
  },
  table: {
    borderCollapse: 'collapse'
  },
  header: {
    '& th': {
      borderBottom: `2px solid ${theme.palette.primary.main}`,
      fontSize: '1.2em',
      padding: '1em',
      textAlign: 'center'
    }
  },
  row: {
    borderCollapse: 'collapse',
    '& td': {
      border: `2px solid ${theme.palette.primary.main}`,
      borderCollapse: 'collapse',
      fontSize: '1.2em',
      padding: '1em',
      textAlign: 'center'
    }
  }
}));

export function ImdVetorHorizontal(props) {
  const classes = useStyles(props);
  return (
    <table className={classes.table}>
      { props.label ?
        <thead>
          <tr className={classes.header}>
            <th colSpan={props.elements.length}>{props.label}</th>
          </tr>
        </thead>
        : undefined }
      <tr className={classes.row}>
        {props.elements.map(element => <td>{element}</td>)}
      </tr>
    </table>
  )
}