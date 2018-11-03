import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import Section from './Section'
import Colors from '../Colors'

const polygon = 'polygon(0 0, 100% 0, 100% 100%, 0 98%)'
const largePolygon = 'polygon(0 0, 100% 0, 100% 100%, 0 95%)'

const styles = theme => ({
  section: {
    WebkitClipPath: polygon,
    clipPath: polygon,
    [theme.breakpoints.up('lg')]: {
      WebkitClipPath: largePolygon,
      clipPath: largePolygon,
    },
  },
  text: {
    fontFamily: 'Gotham Rounded',
    marginTop: 75,
    padding: '0 20px',
    color: Colors.white,
    textAlign: 'center',
    fontSize: 16,
    [theme.breakpoints.up('lg')]: {
      fontSize: 24,
    },
  },
})

export default withStyles(styles)(({ classes }) => (
  <Section
    id="goal"
    backgroundImage="url('https://s3.amazonaws.com/materiamundi-us/static/backgrounds/material-8.jpg')"
    justify="center"
    className={classes.section}
  >
    <Grid item xs={12} md={8}>
      <Typography variant="h4" className={classes.text}>
        O objetivo da MateriaMundi é oferecer acesso a informação de qualidade e
        parâmetros para que seus usuários possam escolher alternativas
        comercialmente disponíveis e socioambientalmente responsáveis para os
        desafios do dia-a-dia, variando desde o que vestimos até como
        construímos nossas casas.
        <br />
        <br />
        Através de uma comunidade ativa, a plataforma permite a criação de
        conhecimento compartilhado sobre ações práticas para uma forma de
        projetar, produzir e consumir mais responsável com a sociedade e o meio
        ambiente.
      </Typography>
    </Grid>
  </Section>
))
