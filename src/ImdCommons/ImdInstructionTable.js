import { makeStyles } from "@material-ui/core";
import { Table, TableBody, TableHeader, TableRow, TableCell } from 'spectacle';
import { baseStyles } from "../styles";

const useStyles = makeStyles((theme, props) => ({
  ...baseStyles,
  complexity: {
  },
  table: {
    border: '2px solid transparent',
    borderCollapse: 'collapse'
  },
  header: {
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    '& td': {
      fontSize: '0.5em',
      padding: '0.3em',
      textAlign: 'center'
    }
  },
  row: {
    borderTop: `1px solid ${theme.palette.primary.light}`,
    '& td': {
      fontSize: '0.5em',
      padding: '0.3em',
      textAlign: 'center'
    }
  }
}));

export default function ImdInstructionTable(props) {
  const classes = useStyles(props);
  return (
    <Table className={classes.table}>
      <TableHeader>
        <TableRow className={classes.header}>
          { props.headers.map(header => <TableCell>{header}</TableCell>) }
        </TableRow>
      </TableHeader>
      <TableBody>
        { props.instructions.map(instruction => (
        <TableRow className={classes.row}>
          { instruction.map(cell => (
            <TableCell className={classes.complexity}>{cell}</TableCell>
          ))}
        </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}