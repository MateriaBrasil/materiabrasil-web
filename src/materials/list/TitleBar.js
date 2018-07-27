import React from 'react'
import GridListTileBar from '@material-ui/core/GridListTileBar'

import Rating from './Rating'

export default props => {
  const { material, actionIcon } = props
  const { name } = material

  return (
    <GridListTileBar
      title={name}
      subtitle={
        <div style={{ display: 'inline-block', color: 'white' }}>
          <Rating {...material} />
        </div>
      }
      actionIcon={actionIcon}
    />
  )
}
