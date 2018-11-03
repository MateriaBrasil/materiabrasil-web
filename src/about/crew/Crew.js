import React from 'react'

import Section from '../Section'
import Members from '../Members'
import Title from '../Title'
import membersList from './membersList'

export default props => {
  return (
    <Section
      id="crew"
      backgroundImage="url('https://s3.amazonaws.com/materiamundi-us/static/backgrounds/material-2.jpg')"
      {...props}
    >
      <Title>Equipe</Title>
      <Members list={membersList} />
    </Section>
  )
}
