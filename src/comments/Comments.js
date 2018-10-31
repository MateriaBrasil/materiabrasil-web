import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import New from './New'
import NoCurrentUser from './NoCurrentUser'
import List from './List'

export default props => {
  const { currentUser } = props

  return (
    <Grid item xs={12} md={8} style={{ margin: '0 auto 36px auto' }}>
      <Card>
        <CardContent>
          {currentUser ? <New {...props} /> : <NoCurrentUser {...props} />}
          <List {...props} />
        </CardContent>
      </Card>
    </Grid>
  )
}
