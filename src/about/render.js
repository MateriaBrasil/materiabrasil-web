import React, { Fragment } from 'react'

import NavBar from '../navBar/NavBar'
import Goal from './Goal'
import HowToUse from './howToUse/render'
import Infographic from './Infographic'
import Crew from './crew/Crew'
import Board from './board/Board'
import Drivers from './drivers/Drivers'
import Developers from './developers/render'

export default props => routeProps => (
  <Fragment>
    <NavBar />
    <Goal />
    <HowToUse />
    <Infographic />
    <Crew />
    <Board />
    <Drivers />
    <Developers />
  </Fragment>
)
