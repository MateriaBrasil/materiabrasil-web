import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Avatar from '../../imageUpload/Avatar'

export default props => {
  const { lg, text } = props
  return (
    <Grid item xs={12} lg={lg}>
      <Typography variant="h5" style={{ marginBottom: 16 }}>
        {text}
      </Typography>
      <Avatar {...props} preserveRatio />
    </Grid>
  )
}
