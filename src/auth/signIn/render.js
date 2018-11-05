import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import SignIn from './SignIn'

export default props => routeProps => (
  <Fragment>
    <Helmet>
      <title>Login</title>
    </Helmet>
    <SignIn {...props} {...routeProps} />
  </Fragment>
)
