import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Supplier from './Supplier'
import Drivers from './Drivers'

export default props => (
  <Grid item xs={12} lg={5} style={{ marginBottom: 16 }}>
    <Card>
      <CardContent>
        <Supplier {...props} />
        <Drivers {...props} />
      </CardContent>
    </Card>
  </Grid>
)
