import React from 'react'
import { List } from 'croods'
import Grid from '@material-ui/core/Grid'

import Search from '../search/Search'
import renderList from './list/render'
import renderCategoriesList from 'categories/list/render'

export default props => ({ history }) => (
  <Grid container spacing={0}>
    <Grid item xs={12} md={3}>
      <Search history={history} />
      <List name="categories" render={renderCategoriesList(props)} />;
    </Grid>
    <Grid item xs={12} md={9}>
      <List name="materials" render={renderList(props)} />;
    </Grid>
  </Grid>
)
