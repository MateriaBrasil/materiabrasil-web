import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

import SignUpLink from '../auth/SignUpLink'
import New from './New'
import List from './List'

export default props => {
  const { currentUser, supplier, location } = props
  const { pathname } = location

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
          {currentUser ? (
            <Fragment>
              {currentUser.id === supplier.userId && <New {...props} />}
              <List {...props} />
            </Fragment>
          ) : (
            <SignUpLink
              pathname={pathname}
              text="para ver os endereços do fornecedor."
            />
          )}
        </CardContent>
      </Card>
    </Grid>
  )
}
