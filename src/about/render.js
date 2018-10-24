import React, { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'

import ExternalGrid from './ExternalGrid'
import NavBar from '../navBar/NavBar'
import TitleGrid from './TitleGrid'
import HowToUse from './HowToUse'
import Crew from './Crew'

export default props => routeProps => (
  <Fragment>
    <NavBar {...props} isInstitutionalPage />
    <ExternalGrid>
      <TitleGrid>Objetivo</TitleGrid>

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
    </ExternalGrid>

    <HowToUse />

    <Crew />

    <ExternalGrid>
      <TitleGrid>Board</TitleGrid>
    </ExternalGrid>

    <ExternalGrid>
      <TitleGrid>Direcionadores</TitleGrid>
    </ExternalGrid>
  </Fragment>
)
