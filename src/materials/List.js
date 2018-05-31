import React from 'react'
import Grid from '@material-ui/core/Grid'

import Card from './Card'

export default ({ list }) => (
  <Grid container style={{ marginTop: 50 }} justify="center">
    <Grid item xs={12} lg={8}>
      <Grid container spacing={24}>
        {list.map((material, index) => (
          <Grid item xs={12} lg={4} key={index}>
            <Card {...material} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  </Grid>
)
