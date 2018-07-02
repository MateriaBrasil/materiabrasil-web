import React from 'react'
import { List } from 'croods'

import renderList from './renderList'

export default props => {
  const { id, type } = props

  return (
    <List
      parentId={id}
      name="comments"
      path={`/${type}/${id}/comments`}
      render={renderList(props)}
    />
  )
}
