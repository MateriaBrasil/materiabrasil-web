import React from 'react'
import Grid from '@material-ui/core/Grid'

import Colors from '../../Colors'
import Session from '../Session'
import Title from '../Title'
import Paragraph from '../Paragraph'
import Members from '../Members'
import membersList from './membersList'

export default () => (
  <Session id="board">
    <Title color>Nosso board</Title>
    <Grid item xs={12}>
      <Paragraph color>
        Sabemos que nada nesse mundo se faz sozinho! Por isso a MateriaMundi
        conta com um Conselho Consultivo que nos ajuda a ter integrar diferentes
        perspectivas e conhecimentos no projeto. Conheça os profissionais que
        doam o seu tempo de forma voluntária para fazer este sonho coletivo
        acontecer!
      </Paragraph>
    </Grid>
    <Members list={membersList} color={Colors.black} />
  </Session>
)
