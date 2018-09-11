import React from 'react'
import { List } from 'croods'
import Grid from '@material-ui/core/Grid'

import renderCategoriesList from 'categories/list/render'
import Search from '../search/Search'
import renderList from './list/render'

export default props => ({ history }) => (
  <Grid container spacing={16}>
    <Grid item xs={12} lg={3}>
      <Search history={history} />
      <List
        name="categories"
        render={renderCategoriesList({ ...props, history })}
      />
    </Grid>
    <List name="materials" render={renderList(props)} />
  </Grid>
)
