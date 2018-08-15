import React from 'react'
import { List } from 'croods'

import renderList from './renderList'

export default props => {
  const { id } = props

  return (
    <List
      parentId={id}
      name="addresses"
      path={`/suppliers/${id}/addresses`}
      render={renderList(props)}
    />
  )
}
