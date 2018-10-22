import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import renderMaterials from './materials/render'
import renderAuth from './auth/render'
import renderUsers from './users/render'
import renderSearch from './search/render'
import renderSuppliers from './suppliers/render'
import renderTopics from './topics/render'
import renderHomepage from './homepage/render'

export default props => (
  <Switch>
    <Route path="/auth" render={renderAuth(props)} />
    <Route path="/users" render={renderUsers(props)} />
    <Route path="/profile" render={renderUsers(props)} />
    <Route path="/search" render={renderSearch(props)} />
    <Route path="/suppliers" render={renderSuppliers(props)} />
    <Route path="/forum" render={renderTopics(props)} />
    <Route path="/materials" render={renderMaterials(props)} />
    <Route path="/" render={renderHomepage(props)} />
  </Switch>
)
