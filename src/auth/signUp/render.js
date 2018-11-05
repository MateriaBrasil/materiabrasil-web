import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import SignUp from './SignUp'

export default props => routeProps => (
  <Fragment>
    <Helmet>
      <title>Cadastre-se</title>
    </Helmet>
    <SignUp {...props} {...routeProps} />
  </Fragment>
)
