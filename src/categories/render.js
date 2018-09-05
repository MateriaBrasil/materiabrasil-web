import React from 'react'
import { List } from 'croods'

import renderList from './renderList'

export default props => routeProps => (
  <List name="categories" render={renderList({ ...props, ...routeProps })} />
)
