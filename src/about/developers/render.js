import React from 'react'

import Colors from '../../Colors'
import Section from '../Section'
import Members from '../Members'
import Title from '../Title'
import Paragraph from '../Paragraph'
import developersList from './developersList'

export default () => (
  <Section id="developers">
    <Title color>Desenvolvedores</Title>
    <Paragraph color>
      Para o desenvolvimento desses direcionadores a MateriaMundi contou com uma
      equipe de consultores especialistas em diversas áreas.
    </Paragraph>
    <Members list={developersList} color={Colors.black} />
  </Section>
)
