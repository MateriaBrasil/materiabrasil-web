import React from 'react'
import { List } from 'croods'

import renderList from './renderList'

export default props => {
  const { id } = props

  return (
    <List
      parentId={id}
      name="favorites"
      path={`/albums/${id}/favorites`}
      render={renderList(props)}
    />
  )
}
