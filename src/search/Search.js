import React from 'react'
import Grid from '@material-ui/core/Grid'

import Form from './Form'

export default props => (
  <Grid item xs={12} md={3}>
    <Form {...props} />
  </Grid>
)