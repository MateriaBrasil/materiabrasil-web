import React from 'react'
import { List } from 'croods'

import Filters from 'categories/Filters'
import renderList from './list/render'

export default props => routeProps => {
  return (
    <Filters
      {...props}
      {...routeProps}
      render={({ categories }) => (
        <List
          name="materials"
          path={`/materials?${categories}`}
          render={renderList(props)}
        />
      )}
    />
  )
}
