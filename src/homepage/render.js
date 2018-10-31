import React, { Fragment } from 'react'

import NavBar from '../navBar/NavBar'
import Stepper from './Stepper'

export default props => () => (
  <Fragment>
    <NavBar {...props} isInstitutionalPage="true" />
    <Stepper {...props} />
  </Fragment>
)
