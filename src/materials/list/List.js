import React from 'react'
import Link from 'react-router-dom/Link'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'

import NewFavorite from '../../favorites/New'

import Rating from './Rating'
import TechnicalSpecification from './TechnicalSpecification'

export default ({ list, currentUser }) => (
  <div>
    <GridList cellHeight={360}>
      {list.map((material, index) => {
        const { id, name, imageUrl } = material

        return (
          <GridListTile item xs={12} sm={6} key={id} cols={id === 1 ? 2 : 1}>
            <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
              <img src={imageUrl} alt={name} style={{ width: '100%' }} />
            </Link>
            <GridListTileBar
              title={name}
              subtitle={
                <div style={{ display: 'inline-block', color: 'white' }}>
                  <Rating {...material} />
                  <TechnicalSpecification {...material} />
                </div>
              }
              actionIcon={
                <NewFavorite id={id} type="icon" style={{ color: 'white' }} />
              }
            />
          </GridListTile>
        )
      })}
    </GridList>
  </div>
)
