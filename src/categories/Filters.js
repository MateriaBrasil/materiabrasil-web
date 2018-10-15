import React from 'react'
import queryString from 'query-string'
import isEmpty from 'lodash/isEmpty'
import map from 'lodash/map'
import { List } from 'croods'
import Grid from '@material-ui/core/Grid'

import renderCategoriesList from 'categories/list/render'
import Search from 'search/Search'
import Filters from 'filters/Filters'

export default props => (
  <Filters
    render={({ selectedCategories }) => {
      const categories = isEmpty(selectedCategories)
        ? ''
        : `${queryString.stringify({
            'categories[]': map(selectedCategories, ({ id }) => id),
          })}`

      const { history, render, searchProps } = props

      return (
        <Grid container spacing={40}>
          <Grid item xs={12} md={3}>
            <Search history={history} {...searchProps} />
            <List
              name="categories"
              render={renderCategoriesList({ ...props, history })}
            />
          </Grid>
          {render({ categories, ...props })}
        </Grid>
      )
    }}
  />
)
