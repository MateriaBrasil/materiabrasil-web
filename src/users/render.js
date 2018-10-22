import React from 'react'

import Content from 'Content'
import Router from './Router'
import NavBar from '../navBar/NavBar'

export default props => routeProps => (
  <Content>
    <NavBar {...props} />
    <Router {...props} {...routeProps} />
  </Content>
)
