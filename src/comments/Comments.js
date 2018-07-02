import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Link from 'react-router-dom/Link'

import New from './New'

export default props => {
  const { currentUser } = props

  return (
    <Grid item xs={12} sm={6} lg={7}>
      {currentUser ? (
        <New {...props} />
      ) : (
        <Card>
          <CardContent>
            <Typography variant="body1" color="inherit">
              <Link to="/auth/sign-in" style={{ textDecoration: 'none' }}>
                Entre
              </Link>{' '}
              <span>para deixar comentários</span>
            </Typography>
          </CardContent>
        </Card>
      )}
    </Grid>
  )
}
