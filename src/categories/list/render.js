import React from 'react'

import Filters from 'filters/Filters'
import List from './List'

export default props => list => (
  <Filters
    list={list}
    render={filters => <List {...props} filters={filters} list={list} />}
  />
)
