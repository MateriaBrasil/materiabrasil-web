import React from 'react'

import SectionTitle from 'homepage/SectionTitle'
import Section from '../Section'
import Members from '../Members'

import membersList from './membersList'

const polygon = 'polygon(0 8%, 100% 0, 100% 92%, 0 100%)'

export default props => (
  <div style={{ position: 'relative' }}>
    <SectionTitle image="/images/polygon-3.png">Equipe</SectionTitle>
    <Section
      id="crew"
      backgroundImage="url('https://s3.amazonaws.com/materiamundi-us/static/backgrounds/material-2.jpg')"
      style={{
        WebkitClipPath: polygon,
        clipPath: polygon,
        paddingTop: '15%',
        paddingBottom: '15%',
      }}
      {...props}
    >
      <Members list={membersList} />
    </Section>
  </div>
)
