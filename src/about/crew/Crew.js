import React from 'react'

import Session from '../Session'
import Members from '../Members'
import Title from '../Title'
import membersList from './membersList'

export default props => {
  return (
    <Session {...props}>
      <Title>Equipe</Title>
      <Members list={membersList} />
    </Session>
  )
}
