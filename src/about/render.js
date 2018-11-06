import React from 'react'
import { Helmet } from 'react-helmet'

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
    <Helmet>
      <title>Sobre</title>
    </Helmet>
    <NavBar />
    <Goal />
    <HowToUse />
    <Crew />
    <Board />
    <Drivers />
    <Developers />
  </div>
)
