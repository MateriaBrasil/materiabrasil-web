import React from 'react'
import map from 'lodash/map'

import Session from './Session'
import CrewMember from './CrewMember'
import Title from './Title'
import List from './crewMembersList'

export default props => {
  return (
    <Session {...props}>
      <Title>Equipe</Title>

      {map(List, ({ id, name, image, job, description }) => {
        return (
          <CrewMember
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
