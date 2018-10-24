import React, { Fragment } from 'react'

import NavBar from '../navBar/NavBar'
import Session from './style/Session'
import TitleStyle from './style/TitleStyle'
import ParagraphStyle from './style/ParagraphStyle'
import HowToUse from './HowToUse'
import Crew from './Crew'

export default props => routeProps => (
  <Fragment>
    <NavBar {...props} isInstitutionalPage />

    <Session>
      <TitleStyle>Objetivo</TitleStyle>

      <ParagraphStyle>
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
      </ParagraphStyle>
    </Session>

    <HowToUse />

    <Crew />

    <Session>
      <TitleStyle>Board</TitleStyle>
    </Session>

    <Session>
      <TitleStyle>Direcionadores</TitleStyle>
    </Session>
  </Fragment>
)
