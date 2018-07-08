import React from 'react'
import Grid from '@material-ui/core/Grid'

import Card from './Card'
import NewFavorite from '../../favorites/New'

export default ({ list }) => (
  <div>
    <Grid container spacing={24}>
      {list.map((material, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card {...material} cardAction={<NewFavorite id={material.id} />} />
        </Grid>
      ))}
    </Grid>
  </div>
)
