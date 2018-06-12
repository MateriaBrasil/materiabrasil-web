import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Card from './Card'
import Description from './Description'

export default ({ current }) => {
  const { name } = current

  return (
    <Grid container spacing={24} justify="center">
      <Grid item xs={12}>
        <Typography variant="display1">{name}</Typography>
      </Grid>
      <Card {...current} />
      <Description {...current} />
    </Grid>
  )
}
