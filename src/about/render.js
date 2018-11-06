import React from 'react'
import { Helmet } from 'react-helmet'

import NavbarAndContent from '../NavBarAndContent'
import Colors from '../Colors'
import Goal from './Goal'
import HowToUse from './HowToUse'
import Crew from './crew/Crew'
import Board from './board/Board'
import Drivers from './drivers/Drivers'
import Developers from './developers/Developers'

export default props => routeProps => (
  <NavbarAndContent institutional {...props}>
    <div style={{ backgroundColor: Colors.grayNurse }}>
      <Helmet>
        <title>Sobre</title>
      </Helmet>
      <Goal />
      <HowToUse />
      <Crew />
      <Board />
      <Drivers />
      <Developers />
    </div>
  </NavbarAndContent>
)
