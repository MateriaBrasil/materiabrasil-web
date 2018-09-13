import React from 'react'
import { List } from 'croods'

import CategoryQueryFilter from 'filters/CategoryQueryFilter'
import renderList from './list/render'

export default props => routeProps => {
  return (
    <CategoryQueryFilter
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
