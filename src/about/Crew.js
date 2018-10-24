import React from 'react'
import map from 'lodash/map'

import Session from './style/Session'
import CrewMember from './style/CrewMember'
import Title from './style/Title'
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
