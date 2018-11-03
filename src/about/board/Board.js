import React from 'react'
import Grid from '@material-ui/core/Grid'

import SectionTitle from 'homepage/SectionTitle'
import Colors from '../../Colors'
import Section from '../Section'
import Paragraph from '../Paragraph'
import Members from '../Members'
import membersList from './membersList'

export default () => (
  <div style={{ position: 'relative' }}>
    <SectionTitle image="/images/polygon-1.png">Nosso board</SectionTitle>
    <Section
      id="board"
      style={{
        paddingTop: '15%',
        paddingBottom: '15%',
      }}
    >
      <Grid item xs={12}>
        <Paragraph color>
          Sabemos que nada nesse mundo se faz sozinho! Por isso a MateriaMundi
          conta com um Conselho Consultivo que nos ajuda a ter integrar
          diferentes perspectivas e conhecimentos no projeto. Conheça os
          profissionais que doam o seu tempo de forma voluntária para fazer este
          sonho coletivo acontecer!
        </Paragraph>
      </Grid>
      <Members list={membersList} color={Colors.black} />
    </Section>
  </div>
)
