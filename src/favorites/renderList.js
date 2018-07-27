import React from 'react'
import Link from 'react-router-dom/Link'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import TitleBar from '../materials/list/TitleBar'
import Destroy from './Destroy'

export default ({ showDestroy }) => list => (
  <GridList cellHeight={360}>
    {list.map(({ id, favoritable, destroying }, index) => {
      const { id: favoritableId, name, imageUrl } = favoritable
      const actionIcon = showDestroy ? (
        <Destroy id={id} destroying={destroying} />
      ) : null

      return (
        <GridListTile key={favoritableId}>
          <Link to={`/${favoritableId}`}>
            <img
              src={imageUrl}
              alt={name}
              style={{ width: '100%', objectFit: 'cover', height: 360 }}
            />
          </Link>
          <TitleBar material={favoritable} actionIcon={actionIcon} />
        </GridListTile>
      )
    })}
  </GridList>
)
