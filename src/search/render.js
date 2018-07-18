import React from 'react'
import { List } from 'croods'

import Explore from '../explore/Explore'
import renderList from './list/render'

export default props => routeProps => {
  const { location } = routeProps
  const { search } = location

  return (
    <Explore {...routeProps}>
      <List
        name="searches"
        path={`/search${search}`}
        render={renderList({ ...props, ...routeProps })}
      />
    </Explore>
  )
}
