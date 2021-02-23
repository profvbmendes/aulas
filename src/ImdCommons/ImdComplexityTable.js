import { makeStyles } from "@material-ui/core";
import { Table, TableBody, TableHeader, TableRow, TableCell } from 'spectacle';
import { baseStyles } from "../styles";

const useStyles = makeStyles((theme, props) => ({
  ...baseStyles,
  complexity: {
    textAlign: 'center'
  },
  table: {
    border: '2px solid transparent',
    borderCollapse: 'collapse'
  },
  header: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    '& td': {
      fontSize: '1.8rem',
      padding: '1rem',
      textAlign: 'center'
    }
  },
  row: {
    borderTop: `1px solid ${theme.palette.primary.light}`,
    '& td': {
      fontSize: '1.8rem',
      padding: '1rem'
    }
  }
}));

export default function ImdComplexityTable(props) {
  const classes = useStyles(props);
  return (
    <Table className={classes.table}>
      <TableHeader>
        <TableRow className={classes.header}>
          <TableCell></TableCell>
          { props.labels.map(label => <TableCell>{label}</TableCell>) }
        </TableRow>
      </TableHeader>
      <TableBody>
        { props.cases.map(caseItem => (
        <TableRow className={classes.row}>
          <TableCell>{caseItem.label}</TableCell>
          { caseItem.complexities.map(complexity => (
            <TableCell className={classes.complexity}>{complexity}</TableCell>
          ))}
        </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}