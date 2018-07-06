import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Comments from '../../comments/Comments'
import Favorites from '../../favorites/New'

import Card from './Card'
import Description from './Description'

export default props => {
  const { current } = props
  const { id, name } = current

  return (
    <Grid container spacing={24}>
      <Grid item xs={12} style={{ display: 'flex' }}>
        <Typography variant="display1" style={{ flex: 1 }}>
          {name}
        </Typography>
        <Favorites {...current} />
      </Grid>
      <Card {...current} />
      <Description {...current} />
      <Comments id={id} type="materials" {...props} />
    </Grid>
  )
}
