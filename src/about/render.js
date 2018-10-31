import React, { Fragment } from 'react'

import NavBar from '../navBar/NavBar'
import Goal from './Goal'
import HowToUse from './howToUse/HowToUse'
import Crew from './crew/Crew'
import Board from './board/Board'

import Drivers from './drivers/Drivers'
export default props => routeProps => (
  <Fragment>
    <NavBar />
    <Goal />
    <HowToUse />
    <Crew />
    <Board />
    <Drivers />
  </Fragment>
)
