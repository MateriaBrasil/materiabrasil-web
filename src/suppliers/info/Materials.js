import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import TitleBar from '../../materials/list/TitleBar'
import LinkToMaterial from '../../materials/LinkToMaterial'

export default ({ list }) => (
  <GridList cellHeight={360}>
    {list.map((material, index) => {
      const { id } = material

      return (
        <GridListTile key={id}>
          <LinkToMaterial {...material} />
          <TitleBar material={material} />
        </GridListTile>
      )
    })}
  </GridList>
)
