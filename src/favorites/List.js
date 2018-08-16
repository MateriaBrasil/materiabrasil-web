import React from 'react'
import { List } from 'croods'

import renderList from './renderList'

export default props => {
  const { id, parentId } = props

  return (
    <List
      parentId={parentId}
      name="favorites"
      path={`/albums/${id}/favorites`}
      render={renderList(props)}
    />
  )
}
