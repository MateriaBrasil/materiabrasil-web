import React, { Fragment } from 'react'

import Content from 'Content'
import Router from './Router'
import NavBar from '../navBar/NavBar'

export default props => routeProps => (
  <Fragment>
    <NavBar {...props} />
    <Content>
      <Router {...props} {...routeProps} />
    </Content>
  </Fragment>
)
