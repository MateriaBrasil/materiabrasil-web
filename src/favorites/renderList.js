import React from 'react'
import map from 'lodash/map'
import Grid from '@material-ui/core/Grid'

import Card from '../materials/list/Card'

export default props => list => (
  <Grid container spacing={16}>
    {map(list, ({ id, favoritable }) => (
      <Grid item xs={6} sm={4} md={4} key={id}>
        <Card {...favoritable} />
      </Grid>
    ))}
  </Grid>
)
