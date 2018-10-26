import React from 'react'
import map from 'lodash/map'

import Session from '../Session'
import Member from '../Member'
import Title from '../Title'
import membersList from './membersList'

export default props => {
  return (
    <Session {...props}>
      <Title>Equipe</Title>

      {map(membersList, ({ id, name, image, job, description }) => {
        return (
          <Member
            key={id}
            image={image}
            name={name}
            job={job}
            description={description}
          />
        )
      })}
    </Session>
  )
}
