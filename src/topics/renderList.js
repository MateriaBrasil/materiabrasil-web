import React from 'react'
import { List } from 'croods'

import render from './list/render'

export default props => routeProps => {
  return <List name="topics" render={render(props)} />
}
