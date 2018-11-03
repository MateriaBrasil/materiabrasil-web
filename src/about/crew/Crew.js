import React from 'react'

import Section from '../Section'
import Members from '../Members'
import Title from '../Title'
import membersList from './membersList'

const polygon = 'polygon(0 8%, 100% 0, 100% 92%, 0 100%)'

export default props => {
  return (
    <Section
      id="crew"
      backgroundImage="url('https://s3.amazonaws.com/materiamundi-us/static/backgrounds/material-2.jpg')"
      style={{ '-webkit-clip-path': polygon, clipPath: polygon }}
      {...props}
    >
      <Title>Equipe</Title>
      <Members list={membersList} />
    </Section>
  )
}
