import React from 'react'
import Helmet from '../../Helmet'

import SignUp from './SignUp'

export default props => routeProps => (
  <Helmet title="Cadastre-se">
    <SignUp {...props} {...routeProps} />
  </Helmet>
)
