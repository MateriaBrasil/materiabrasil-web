import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import Links from './Links'
import Supplier from './Supplier'
import Reviews from './Reviews'

export default props => {
  const { code, description } = props

  return (
    <Grid item xs={12} sm={6} lg={5}>
      <Typography variant="caption" style={{ marginBottom: 16 }}>
        {code}
      </Typography>
      <Typography variant="subheading" style={{ marginBottom: 24 }}>
        {description}
      </Typography>
      <Divider style={{ marginBottom: 24 }} />
      <Supplier {...props} />
      <Divider style={{ marginTop: 24, marginBottom: 24 }} />
      <Links {...props} />
      <Reviews {...props} />
    </Grid>
  )
}
