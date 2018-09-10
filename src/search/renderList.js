import React from 'react'
import { List } from 'croods'
import Grid from '@material-ui/core/Grid'

import renderCategoriesList from 'categories/list/render'

import Error from 'Error'
import Search from './Search'
import renderList from './list/render'

export default props => routeProps => {
  const { term } = routeProps.match.params
  const { history } = routeProps

  return (
    <Grid container spacing={0}>
      <Grid item xs={12} lg={3}>
        <Search term={term} history={history} autoFocus />
        <List
          name="categories"
          render={renderCategoriesList({ ...props, history })}
        />
      </Grid>
      <List
        name="searches"
        path={`/search?term=${term || ''}`}
        render={renderList({ ...props, ...routeProps })}
        renderError={error => <Error color="default">{error}</Error>}
      />
    </Grid>
  )
}
