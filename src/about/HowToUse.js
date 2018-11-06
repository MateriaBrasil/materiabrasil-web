import React from 'react'

import SectionTitle from 'homepage/SectionTitle'
import Section from './Section'
import Infograph from './Infograph'

export default props => (
  <div style={{ position: 'relative' }}>
    <SectionTitle image="/images/polygon-2.png">Como usar</SectionTitle>
    <Section id="how_to_use">
      <Infograph title="Fornecedor" url="images/infograph1.png" />
      <Infograph title="Usuário" url="images/infograph2.png" />
    </Section>
  </div>
)
