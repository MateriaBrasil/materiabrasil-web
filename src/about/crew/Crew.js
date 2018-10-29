import React from 'react'
import map from 'lodash/map'

import Session from '../Session'
import Members from '../Members'
import Title from '../Title'
import membersList from './membersList'

export default props => {
  return (
    <Session {...props}>
      <Title>Equipe</Title>
      <Members membersList={membersList} />
    </Session>
  )
}
