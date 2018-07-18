import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import renderMaterials from './materials/render'
import renderAuth from './auth/render'
import renderUser from './users/render'
import renderSearch from './search/render'

export default props => (
  <Switch>
    <Route path="/auth" render={renderAuth(props)} />
    <Route exact path="/user/:id" render={renderUser(props)} />
    <Route exact path="/search" render={renderSearch(props)} />
    <Route path="/" render={renderMaterials(props)} />
  </Switch>
)
