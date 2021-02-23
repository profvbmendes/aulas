import { Box, makeStyles, Typography } from '@material-ui/core';
import { useSteps } from 'spectacle/es/hooks/use-steps';
import DiagramaDeClasse from '../../../ImdCommons/DiagramaDeClasse';
import { themeBaseStyles } from '../../../styles';

const useStyles = makeStyles((theme, props) => ({
  ...themeBaseStyles(theme, props),
}));


export function HerancaDiagramasDeClasse(props) {
  const classes = useStyles(props);
  
  const {step, placeholder: stepPlaceholder} = useSteps(2, {});

  const itemClass = step >= 0 ? classes.danger : undefined;

  return (
    <Box display="flex"
        className={classes.root}
        flexDirection="column"
        alignItems="stretch"
        justifyContent="space-evenly">
      <Typography style={{textAlign: 'center', fontSize: '2em'}}>Vamos analisar o exemplo. O que podemos perceber?</Typography>
      <Box display="flex"
            className={classes.root}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-evenly">
        {stepPlaceholder}
        <Box>
          <DiagramaDeClasse 
            nome="ContaCorrente"
            atributos={[
              <span className={itemClass}>titular: Contato</span>,
              <span className={itemClass}>numeroAgencia: String</span>, 
              <span className={itemClass}>numeroConta: String</span>,
              <span className={itemClass}>saldo: BigDecimal</span>,
              <span className={itemClass}>dataAbertura: LocalDate</span>
            ]}
            metodos={[
              <span className={itemClass}>sacar(BigDecimal valor)</span>,
              <span className={itemClass}>depositar(BigDecimal valor)</span>
            ]}/>
        </Box>
        <Box>
          <DiagramaDeClasse 
            nome="ContaAplicacao"
            atributos={[
              <span className={itemClass}>titular: Contato</span>,
              <span className={itemClass}>numeroAgencia: String</span>, 
              <span className={itemClass}>numeroConta: String</span>,
              <span className={itemClass}>saldo: BigDecimal</span>,
              'taxaRendimento: BigDecimal',
              <span className={itemClass}>dataAbertura: LocalDate</span>
            ]}
            metodos={[
              <span className={itemClass}>sacar(BigDecimal valor)</span>,
              <span className={itemClass}>depositar(BigDecimal valor)</span>,
              'computarRendimento()'
            ]}/>
        </Box>
      </Box>
      { step >= 1 && <Typography style={{textAlign: 'center', fontSize: '3em'}}><span className={classes.danger}>Duplicação de código!</span></Typography> }
    </Box>
  );  
}