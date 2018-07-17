import React from 'react'
import Link from 'react-router-dom/Link'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import TitleBar from './TitleBar'
import NewFavorite from '../../favorites/New'

export default ({ list, currentUser }) => (
  <GridList cellHeight={360}>
    {list.map((material, index) => {
      const { id, highlighted, name, imageUrl } = material
      const cols = highlighted ? 2 : 1
      const actionIcon = currentUser ? (
        <NewFavorite id={id} type="icon" style={{ color: 'white' }} />
      ) : null

      return (
        <GridListTile key={id} cols={cols}>
          <Link to={`/${id}`}>
            <img
              src={imageUrl}
              alt={name}
              style={{ width: '100%', objectFit: 'cover', height: 360 }}
            />
          </Link>
          <TitleBar material={material} actionIcon={actionIcon} />
        </GridListTile>
      )
    })}
  </GridList>
)
