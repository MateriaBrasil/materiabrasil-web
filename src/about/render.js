import React, { Fragment } from 'react'

import NavBar from '../navBar/NavBar'
import Session from './Session'
import Title from './Title'
import Paragraph from './Paragraph'
import HowToUse from './HowToUse'
import Crew from './Crew'

export default props => routeProps => (
  <Fragment>
    <NavBar {...props} isInstitutionalPage />

    <Session>
      <Title>Objetivo</Title>

      <Paragraph>
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
      </Paragraph>
    </Session>

    <HowToUse />

    <Crew />

    <Session>
      <Title>Board</Title>
    </Session>

    <Session>
      <Title>Direcionadores</Title>
    </Session>
  </Fragment>
)
