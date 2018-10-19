import React from 'react'

import Content from 'Content'
import Router from './Router'

export default props => routeProps => (
  <Content>
    <Router {...props} />
  </Content>
)
