import React from 'react'

import Colors from '../Colors'
import NavBar from '../navBar/NavBar'
import Goal from './Goal'
import HowToUse from './HowToUse'
import Crew from './crew/Crew'
import Board from './board/Board'
import Drivers from './drivers/Drivers'
import Developers from './developers/Developers'

export default props => routeProps => (
  <div style={{ backgroundColor: Colors.grayNurse }}>
    <NavBar />
    <Goal />
    <HowToUse />
    <Crew />
    <Board />
    <Drivers />
    <Developers />
  </div>
)
