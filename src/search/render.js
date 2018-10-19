import React from 'react'

import Router from './Router'
import Content from 'Content'

export default props => routeProps => (
  <Content>
    <Router {...props} />
  </Content>
)
