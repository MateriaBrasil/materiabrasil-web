import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'

import Grid from './Grid'
import NavBar from '../navBar/NavBar'

export default props => routeProps => (
  <Fragment>
    <NavBar {...props} isTransparent="true" />

    <Grid>
      <Typography
        variant="display2"
        color="inherit"
        className="text"
        style={{
          color: '#fff',
          marginTop: 70,
          display: 'inline-block',
          fontWeight: 300,
        }}
      >
        <h2>
          <strong>Objetivo</strong>
        </h2>
        O objetivo da MateriaMundi oferecer acesso à informação de qualidade e
        parâmetros para que seus usuários possam escolher alternativas
        comercialmente disponíveis e socioambiental responsáveis para os
        desafios do dia a dia, variando desde o que vestimos até como
        construímos nossas casas.
        <br />
        Através da criação de uma comunidade ativa a plataforma permite a
        criação de conhecimento compartilhado sobre ações práticas para uma
        forma de projetar, produzir e consumir mais responsável com a sociedade
        e o meio ambiente.
        <h2>
          <strong>Como usar</strong>
        </h2>
        <h2>
          <strong>Equipe</strong>
        </h2>
        <h2>
          <strong>Board</strong>
        </h2>
        <h2>
          <strong>Direcionadores</strong>
        </h2>
      </Typography>
    </Grid>
  </Fragment>
)
