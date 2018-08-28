import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'

import New from './New'
import List from './List'
import SignUpLink from '../auth/SignUpLink'

export default props => {
  const { currentUser, supplier, location } = props
  const { pathname } = location

  return (
    <Fragment>
      {currentUser ? (
        <Fragment>
          {currentUser.id === supplier.userId && <New {...props} />}
          <List {...props} />
        </Fragment>
      ) : (
        <Grid item xs={12}>
          <SignUpLink
            pathname={pathname}
            text="para ver os endereços do fornecedor."
          />
        </Grid>
      )}
    </Fragment>
  )
}
