import React from 'react'
import { List } from 'croods'

import Error from 'Error'
import CategoryQueryFilter from 'filters/CategoryQueryFilter'
import renderList from './list/render'

export default props => routeProps => {
  const { term } = routeProps.match.params
  const searchProps = { term, autoFocus: true }

  return (
    <CategoryQueryFilter
      {...props}
      {...routeProps}
      searchProps={searchProps}
      render={({ categories }) => (
        <List
          name="searches"
          path={`/search?term=${term || ''}&${categories}`}
          render={renderList({ ...props, ...routeProps })}
          renderError={error => <Error color="default">{error}</Error>}
        />
      )}
    />
  )
}
