import { Box, Grid, makeStyles } from "@material-ui/core";
import { Slide, Heading } from "spectacle";
import { baseStyles } from "../styles";

const useStyles = makeStyles((theme, props) => ({
  ...baseStyles,
  topico: {
    fontSize: '3em',
    marginBottom: '1em'
  }
}));

export default function ImdSlide(props) {
  const classes = useStyles(props);
  return (
    <Slide backgroundColor="backgroundColor">
      <Box display="flex"
          className={classes.root}
          flexDirection="column"
          alignItems="center"
          spacing={3}>
        {props.heading && <Grid item><Heading>{props.heading}</Heading></Grid>}
        <Box display="flex" flexGrow={1} width="100%">
          {props.children}
        </Box>
      </Box>
    </Slide>
  );
}