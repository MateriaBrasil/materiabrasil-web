import React, { Fragment } from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Grid from '../InstitutionalPagesGrid'
import NavBar from '../navBar/NavBar'
import Video from './Video'

export default props => routeProps => (
  <Fragment>
    <NavBar {...props} isInstitutionalPage="true" />
    <Grid>
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
        <Typography
          variant="display2"
          color="inherit"
          className="text"
          style={{
            color: '#fff',
            display: 'inline-block',
            verticalAlign: 'middle',
            fontWeight: 500,
          }}
        >
          Objetivo
        </Typography>
        <p>
          O objetivo da MateriaMundi oferecer acesso à informação de qualidade e
          parâmetros para que seus usuários possam escolher alternativas
          comercialmente disponíveis e socioambiental responsáveis para os
          desafios do dia a dia, variando desde o que vestimos até como
          construímos nossas casas.
          <br />
          Através da criação de uma comunidade ativa a plataforma permite a
          criação de conhecimento compartilhado sobre ações práticas para uma
          forma de projetar, produzir e consumir mais responsável com a
          sociedade e o meio ambiente.
        </p>
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
      <Typography
        variant="display2"
        color="inherit"
        className="text"
        style={{
          color: '#fff',
          display: 'inline-block',
          verticalAlign: 'middle',
          fontWeight: 500,
        }}
      >
        <strong>Equipe</strong>
      </Typography>
    </Grid>

    <Grid>
      <Typography
        variant="display2"
        color="inherit"
        className="text"
        style={{
          color: '#fff',
          display: 'inline-block',
          verticalAlign: 'middle',
          fontWeight: 500,
        }}
      >
        <strong>Board</strong>
      </Typography>
    </Grid>

    <Grid>
      <Typography
        variant="display2"
        color="inherit"
        className="text"
        style={{
          color: '#fff',
          display: 'inline-block',
          verticalAlign: 'middle',
          fontWeight: 500,
        }}
      >
        <strong>Direcionadores</strong>
      </Typography>
    </Grid>

    <Grid>
      <Link to={`/materials`} style={{ textDecoration: 'none' }}>
        <Button
          variant="raised"
          color="default"
          size="large"
          style={{
            borderRadius: 7,
            fontWeight: 100,
            textTransform: 'lowercase',
            fontSize: 40,
            padding: '15px 50px',
            background: '#fff',
          }}
        >
          Explore
        </Button>
      </Link>
      <p
        style={{
          color: '#fff',
          position: 'absolute',
          bottom: 20,
          width: '100%',
          textAlign: 'center',
          fontFamily: 'roboto',
        }}
      >
        Apoio: Instituto C&A; <br />
        Parceiros: Good Tech Lab, Fab City Global, Materiom;
        <br />
        Membro: Sistema B Brasil e CE100 Global Ellen MacArthur Foundation.
      </p>
    </Grid>
  </Fragment>
)
