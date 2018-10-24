import React, { Fragment } from 'react'

import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default props => {
  const { title, children } = props
  return (
    <Grid item xs={12} style={{ marginBottom: 36 }}>
      <Card>
        <CardContent>
          <Typography
            variant="h5"
            color="textSecondary"
            style={{ marginBottom: 16 }}
          >
            {title}
          </Typography>
          <Fragment>{children}</Fragment>
        </CardContent>
      </Card>
    </Grid>
  )
}
