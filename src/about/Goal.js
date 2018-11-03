import React from 'react'

import Section from './Section'
import Title from './Title'
import Paragraph from './Paragraph'

export default () => (
  <Section
    id="goal"
    backgroundImage="url('https://s3.amazonaws.com/materiamundi-us/static/backgrounds/material-8.jpg')"
  >
    <Title>
      <br />
      Objetivo
    </Title>
    <Paragraph>
      O objetivo da MateriaMundi oferecer acesso à informação de qualidade e
      parâmetros para que seus usuários possam escolher alternativas
      comercialmente disponíveis e socioambiental responsáveis para os desafios
      do dia a dia, variando desde o que vestimos até como construímos nossas
      casas.
      <br />
      Através da criação de uma comunidade ativa a plataforma permite a criação
      de conhecimento compartilhado sobre ações práticas para uma forma de
      projetar, produzir e consumir mais responsável com a sociedade e o meio
      ambiente.
    </Paragraph>
  </Section>
)
