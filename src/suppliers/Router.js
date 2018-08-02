import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import renderNew from './renderNew'

export default props => (
  <Switch>
    <Route path="/suppliers/new" render={renderNew(props)} />
  </Switch>
)
