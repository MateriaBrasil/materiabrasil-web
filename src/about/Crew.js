import React from 'react'
import map from 'lodash/map'

import Session from './style/Session'
import CrewMember from './style/CrewMemberStyle'
import TitleStyle from './style/TitleStyle'
import List from './CrewMembersList'

export default props => {
  return (
    <Session {...props}>
      <TitleStyle>Equipe</TitleStyle>

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
    </Session>
  )
}
