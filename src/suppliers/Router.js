import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import renderNew from './renderNew'
import renderInfo from './renderInfo'

export default props => (
  <Switch>
    <Route path="/suppliers/new" render={renderNew(props)} />
    <Route path="/suppliers/:id" render={renderInfo(props)} />
  </Switch>
)
