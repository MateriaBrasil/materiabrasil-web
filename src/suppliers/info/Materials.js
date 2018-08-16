import React from 'react'
import Link from 'react-router-dom/Link'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import TitleBar from '../../materials/list/TitleBar'

export default ({ list }) => (
  <GridList cellHeight={360}>
    {list.map((material, index) => {
      const { id, name, imageUrl } = material

      return (
        <GridListTile key={id}>
          <Link to={`/${id}`}>
            <img
              src={imageUrl}
              alt={name}
              style={{ width: '100%', objectFit: 'cover', height: 360 }}
            />
          </Link>
          <TitleBar material={material} />
        </GridListTile>
      )
    })}
  </GridList>
)
