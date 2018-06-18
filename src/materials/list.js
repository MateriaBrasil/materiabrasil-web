import React from 'react'

import { List } from 'croods'

import renderList from './list/render'

export default props => routeProps => {
  return (
    <List
      name="materials"
      path={`/materials`}
      render={renderList({ ...props, ...routeProps })}
    />
  )
}
