import React from 'react'
import FragmentWithHelmet from '../../FragmentWithHelmet'

import SignUp from './SignUp'

export default props => routeProps => (
  <FragmentWithHelmet title="Cadastre-se">
    <SignUp {...props} {...routeProps} />
  </FragmentWithHelmet>
)
