import React from 'react'
import { List } from 'croods'

import Explore from '../explore/Explore'
import renderList from './list/render'

export default props => routeProps => (
  <Explore {...routeProps}>
    <List name="materials" render={renderList(props)} />
  </Explore>
)
