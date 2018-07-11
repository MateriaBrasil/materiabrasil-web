import React from 'react'
import { List } from 'croods'

import renderList from './list/render'

export default props => routeProps => {
  const { match } = routeProps
  const { params } = match
  const { id } = params

  return (
    <List
      parentId={id}
      name="reviews"
      path={`/materials/${id}/reviews`}
      render={renderList({ ...props, ...routeProps, id })}
    />
  )
}
