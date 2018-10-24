import React from 'react'
import map from 'lodash/map'

import SessionGrid from './SessionGrid'
import CrewMember from './CrewMember'
import List from './CrewMembersList'
import TitleGrid from './TitleGrid'

export default props => {
  return (
    <SessionGrid {...props}>
      <TitleGrid>Equipe</TitleGrid>

      {map(List, ({ name, image, job, description }) => {
        return (
          <CrewMember
            key={name}
            image={image}
            name={name}
            job={job}
            description={description}
          />
        )
      })}
    </SessionGrid>
  )
}
