import React from 'react'
import Helmet from '../../Helmet'

import SignIn from './SignIn'

export default props => routeProps => (
  <Helmet title="Login">
    <SignIn {...props} {...routeProps} />
  </Helmet>
)
