import React, { Fragment } from 'react'
import { List } from 'croods'
import { Helmet } from 'react-helmet'

import Filters from 'categories/Filters'
import renderList from './list/render'

export default props => routeProps => {
  return (
    <Fragment>
      <Helmet>
        <title>Explore</title>
      </Helmet>
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
    </Fragment>
  )
}
