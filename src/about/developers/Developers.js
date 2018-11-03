import React from 'react'

import SectionTitle from 'homepage/SectionTitle'
import Colors from '../../Colors'
import Section from '../Section'
import Members from '../Members'
import Paragraph from '../Paragraph'
import developersList from './developersList'

export default () => (
  <div style={{ position: 'relative' }}>
    <SectionTitle image="/images/polygon-3.png">Desenvolvedores</SectionTitle>
    <Section id="developers">
      <Paragraph color>
        Para o desenvolvimento desses direcionadores a MateriaMundi contou com
        uma equipe de consultores especialistas em diversas áreas.
      </Paragraph>
      <Members list={developersList} color={Colors.black} />
    </Section>
  </div>
)
