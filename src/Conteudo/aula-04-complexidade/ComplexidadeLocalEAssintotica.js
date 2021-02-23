import { makeStyles, Typography, Grid } from "@material-ui/core";
import { useContext, useEffect } from "react";
import { Box, Heading, ListItem } from "spectacle";
import { SlideContext } from "spectacle/es/components/slide/slide";
import { useSteps } from 'spectacle/es/hooks/use-steps';
import { buscaSequencialCode } from "../../codes/busca_sequencial";
import ImdCodePane from "../../ImdCommons/ImdCodePane";
import ImdComplexityTable from "../../ImdCommons/ImdComplexityTable";
import ImdInstructionTable from "../../ImdCommons/ImdInstructionTable";
import { ImdVetorHorizontal } from "../../ImdCommons/ImdVetor";
import Math from "../../ImdCommons/Math";
import { baseStyles } from "../../styles";

const useStyles = makeStyles((theme, props) => ({
  ...baseStyles,
}));

export default function ComplexidadeLocalEAssintotica(props) {
  const classes = useStyles(props);
  const steps = useSteps(10, {});
  const dadosComplexidade = [
    {
      melhorLocal: String.raw`?`, melhorAssintotica: String.raw`?`,
      piorLocal: String.raw`?`, piorAssintotica: String.raw`?`,
    },{
      melhorLocal: String.raw`4`, melhorAssintotica: String.raw`?`,
      piorLocal: String.raw`?`, piorAssintotica: String.raw`?`,
    },{
      melhorLocal: String.raw`?`, melhorAssintotica: String.raw`?`,
      piorLocal: String.raw`?`, piorAssintotica: String.raw`?`,
    },{
      melhorLocal: String.raw`?`, melhorAssintotica: String.raw`?`,
      piorLocal: String.raw`?`, piorAssintotica: String.raw`?`,
    }
  ]

  return (  
    <Box className={classes.slideBox}>
      {steps.placeholder}
      <Heading>Complexidade Local e Assintótica</Heading>
      <Box className={classes.slideContentColumnBox}>
        <ImdCodePane
            language="java">
          {buscaSequencialCode}
        </ImdCodePane>
        <Box width="70%">
          <ImdComplexityTable
              labels={['Complexidade Local', 'Complexidade Assintótica']}
              cases={[{
                label: 'Melhor caso',
                complexities: [<Math tex={steps.step < 0 ? String.raw`?` : String.raw`4`}/>, <Math tex={String.raw`?`}/>]
              },{
                label: 'Pior caso',
                complexities: [<Math tex={String.raw`?`}/>, <Math tex={String.raw`?`}/>]
              }]}
            />
        </Box>
      </Box>
    </Box>);
}

export function ComplexidadeLocalMelhorCaso(props) {
  const classes = useStyles(props);
  const instructions = [
    ['i = 0', 1],
    ['i < vetor.length', 1],
    ['vetor[i] == chave', 1],
    ['return i', 1]
  ];
  const stepsData = [
    {
      highlightLines: undefined,
    },{
      highlightLines: 2,
    },{
      highlightLines: 2,
    },{
      highlightLines: 3,
    },{
      highlightLines: 4,
    },{
      highlightLines: 4,
    }
  ];


  const {step, placeholder: stepPlaceholder} = useSteps(stepsData.length-1, {});
  
  const stepInstructions = step >= 0 ? instructions.slice(0, step+1) : [];
  const stepHighlightLines = step >= 0 ? stepsData[step+1].highlightLines : undefined;

  return (  
    <div className={classes.root}>
      {stepPlaceholder}
      <Heading>Complexidade Local: Melhor caso</Heading>
      <Grid container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={2}>
        <Grid item xs>
          <Grid container spacing={3}>
            <Grid item style={{fontSize: '0.8em'}}>
              <ImdCodePane
                  language="java"
                  highlightLines={stepHighlightLines}>
                {buscaSequencialCode}
              </ImdCodePane>
            </Grid>
            <Grid item>
              <Grid container
                  direction="column"
                  justify="center"
                  alignItems="center">
                <Grid item xs>
                  <Typography variant="h5">Melhor caso</Typography>
                </Grid>
                <Grid item xs>
                  <Grid container
                      direction="row">
                    <Grid item>
                      <ImdVetorHorizontal
                          label="vetor"
                          elements={[15, 28, 18, '...', 45]}
                        />
                    </Grid>
                    <Grid item>
                      <ImdVetorHorizontal
                          label="chave"
                          elements={[15]}
                        />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs>
          <ImdInstructionTable
              headers={['Instrução', '# execuções']}
              instructions={stepInstructions}
            />
        </Grid>
        <Grid item xs>
          <Typography className={[classes.formula, step >= 4 ? undefined : classes.hidden ]}><Math tex={String.raw`1 + 1 + 1 + 1 = 4`}/></Typography>
        </Grid>
      </Grid>
    </div>);
}