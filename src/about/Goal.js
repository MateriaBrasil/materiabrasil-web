import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

import Section from './Section'
import Colors from '../Colors'

const polygon = 'polygon(0 0, 100% 0, 100% 100%, 0 92%)'

export default () => (
  <Section
    id="goal"
    backgroundImage="url('https://s3.amazonaws.com/materiamundi-us/static/backgrounds/material-8.jpg')"
    style={{ '-webkit-clip-path': polygon, clipPath: polygon }}
    justify="center"
  >
    <Grid item xs={12} md={8}>
      <Typography
        variant="h5"
        color="inherit"
        style={{
          fontFamily: 'Gotham Rounded',
          marginTop: 75,
          padding: '0 20px',
          color: Colors.white,
          textAlign: 'center',
        }}
      >
        O objetivo da MateriaMundi é oferecer acesso à informação de qualidade e
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
)
