import React from 'react'
import Grid from '@material-ui/core/Grid'

import Card from './Card'
import NewFavorite from '../../favorites/New'

export default ({ list, currentUser }) => (
  <div>
    <Grid container spacing={8}>
      {list.map((material, index) => (
        <Grid item xs={12} sm={6} key={index}>
          <Card
            {...material}
            cardAction={
              currentUser ? <NewFavorite id={material.id} type="icon" /> : null
            }
          />
        </Grid>
      ))}
    </Grid>
  </div>
)
