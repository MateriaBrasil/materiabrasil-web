import React from 'react'
import Grid from '@material-ui/core/Grid'

import Session from '../Session'
import Title from '../Title'
import Paragraph from '../Paragraph'
import Members from '../Members'
import membersList from './membersList'

export default () => (
  <Session>
    <Title>Nosso board</Title>
    <Grid item xs={12}>
      <Paragraph>
        Sabemos que nada nesse mundo se faz sozinho! Por isso a MateriaMundi
        conta com um Conselho Consultivo que nos ajuda a ter integrar diferentes
        perspectivas e conhecimentos no projeto. Conheça os profissionais que
        doam o seu tempo de forma voluntária para fazer este sonho coletivo
        acontecer!
      </Paragraph>
    </Grid>
    <Members list={membersList} />
  </Session>
)
