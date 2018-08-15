import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import New from './New'
import List from './List'

export default props => {
  const { currentUser, supplier } = props

  return (
    <Grid item xs={12} style={{ marginBottom: 36 }}>
      <Card>
        <CardContent>
          <Typography
            variant="headline"
            color="textSecondary"
            style={{ marginBottom: 16 }}
          >
            Endereços
          </Typography>
          {currentUser &&
            currentUser.id === supplier.userId && <New {...props} />}
          <List {...props} />
        </CardContent>
      </Card>
    </Grid>
  )
}
