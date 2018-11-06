import React from 'react'
import FragmentWithHelmet from '../../FragmentWithHelmet'

import SignIn from './SignIn'

export default props => routeProps => (
  <FragmentWithHelmet title="Login">
    <SignIn {...props} {...routeProps} />
  </FragmentWithHelmet>
)
