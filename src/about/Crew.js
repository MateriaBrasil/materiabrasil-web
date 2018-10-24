import React from 'react'
import Grid from '@material-ui/core/Grid'
import map from 'lodash/map'

import ExternalGrid from './ExternalGrid'
import TextTitle from './TextTitle'
import CrewMember from './CrewMember'
import List from './CrewMembersList'
import TitleGrid from './TitleGrid'

export default props => {
  return (
    <ExternalGrid {...props}>
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
    </ExternalGrid>
  )
}
