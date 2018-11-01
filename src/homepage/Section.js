import React from 'react'
import Waypoint from 'react-waypoint'

export default props => (
  <Waypoint onEnter={props.handleScroll}>
    <div>{props.children}</div>
  </Waypoint>
)
