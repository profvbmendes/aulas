import { List, makeStyles } from "@material-ui/core";
import { Box, Heading, ListItem } from "spectacle";
import { baseStyles } from "../styles";
import ImdSlide from "./ImdSlide";

const useStyles = makeStyles((theme, props) => ({
  ...baseStyles,
}));

export function Topico(props) {
  return (<ListItem component="li" className={props.className}>{props.children}</ListItem>);
}

export default function SlideAgenda(props) {
  const classes = useStyles(props);

  return (  
      <ImdSlide>
        <Box className={classes.slideBox}>
          <Heading>Agenda</Heading>
          <Box className={classes.slideContentColumnBox}>
            <List component="ul" className={classes.numbersOl}>
              { props.children }
            </List>
          </Box>
        </Box>
      </ImdSlide>);
}