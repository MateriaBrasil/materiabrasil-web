import React from 'react'
import queryString from 'query-string'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import { List } from 'croods'
import Grid from '@material-ui/core/Grid'

import Filters from 'filters/Filters'
import renderCategoriesList from 'categories/list/render'
import Search from '../search/Search'
import renderList from './list/render'

export default props => ({ history }) => (
  <Filters
    render={({ selectedCategories }) => {
      const categories = isEmpty(selectedCategories)
        ? ''
        : `?${queryString.stringify({
            'categories[]': map(selectedCategories, ({ id }) => id),
          })}`

      const path = `/materials${categories}`

      return (
        <Grid container spacing={40}>
          <Grid item xs={12} lg={3}>
            <Search history={history} />
            <List
              name="categories"
              render={renderCategoriesList({ ...props, history })}
            />
          </Grid>
          <List name="materials" path={path} render={renderList(props)} />
        </Grid>
      )
    }}
  />
)
