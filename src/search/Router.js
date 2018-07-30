import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import renderRoot from './renderRoot'
import renderList from './renderList'

export default props => (
  <Switch>
    <Route exact path="/search" render={renderRoot(props)} />
    <Route exact path="/search/:term" render={renderList(props)} />
  </Switch>
)
