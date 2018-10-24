import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'

import Grid from '../InstitutionalPagesGrid'
import Video from '../Video'
import NavBar from '../navBar/NavBar'
import TextTitle from './TextTitle'

export default props => routeProps => (
  <Fragment>
    <NavBar {...props} isInstitutionalPage />
    <Grid>
      <TextTitle>Objetivo</TextTitle>

      <Typography
        variant="display2"
        color="inherit"
        className="text"
        style={{
          color: '#fff',
          display: 'inline-block',
          verticalAlign: 'middle',
          fontWeight: 300,
        }}
      >
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
      </Typography>
    </Grid>

    <Grid isVideo>
      <Typography
        variant="display2"
        color="inherit"
        className="text"
        style={{
          width: '100%',
          position: 'absolute',
          top: '8%',
          color: '#fff',
          verticalAlign: 'middle',
          fontWeight: 500,
        }}
      >
        Como usar
      </Typography>
      <Video />
    </Grid>

    <Grid>
      <TextTitle>Equipe</TextTitle>
    </Grid>

    <Grid>
      <TextTitle>Board</TextTitle>
    </Grid>

    <Grid>
      <TextTitle>Direcionadores</TextTitle>
    </Grid>
  </Fragment>
)
