import React, { Fragment } from 'react'

import NavBar from '../navBar/NavBar'
import Goal from './Goal'
import HowToUse from './HowToUse'
import Crew from './Crew'
import Board from './Board'
import Drivers from './Drivers'

export default props => routeProps => (
  <Fragment>
    <NavBar {...props} isInstitutionalPage />
    <Goal />
    <HowToUse />
    <Crew />
    <Board />
    <Drivers />
  </Fragment>
)
