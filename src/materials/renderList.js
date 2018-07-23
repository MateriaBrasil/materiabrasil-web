import React from 'react'
import { List } from 'croods'
import Grid from '@material-ui/core/Grid'

import Search from '../search/Search'
import renderList from './list/render'

export default props => ({ history }) => (
  <Grid container spacing={0}>
    <Search history={history} />
    <List name="materials" render={renderList(props)} />
  </Grid>
)
