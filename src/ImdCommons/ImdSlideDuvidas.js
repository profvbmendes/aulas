import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
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
          justifyContent="space-around"
          spacing={3}>
        <Box><Typography class={classes.topicoS3}><span class={classes.emphasis}>Duvidas?</span></Typography></Box>
        <Box style={{textAlign: 'center'}}>
          <Typography class={classes.topicoS1}><span class={classes.emphasis}>SIGAA</span></Typography>
          <Typography class={classes.topicoS1}><span class={classes.emphasis}>Telegram</span></Typography>
          <Typography class={classes.topicoS1}><span class={classes.emphasis}>Google Classroom</span></Typography>
          <Typography class={classes.topicoS1}><span class={classes.emphasis}>E-mail</span></Typography>
        </Box>
      </Box>
    </Slide>
  );
}