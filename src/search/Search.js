import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Form from './Form'

export default props => (
  <Grid item xs={12} sm={3}>
    <Card elevation={0}>
      <CardContent>
        <Form {...props} />
      </CardContent>
    </Card>
  </Grid>
)
