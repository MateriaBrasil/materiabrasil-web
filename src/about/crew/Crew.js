import React from 'react'

import Session from '../Session'
import Members from '../Members'
import Title from '../Title'
import membersList from './membersList'

export default props => {
  return (
    <Session
      id="crew"
      backgroundImage="url('https://s3.amazonaws.com/materiamundi-us/static/backgrounds/material-4.jpg')"
      {...props}
    >
      <Title>Equipe</Title>
      <Members list={membersList} />
    </Session>
  )
}
