import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import renderMaterials from './materials/list'
import renderMaterial from './materials/info'

export default props => (
  <Switch>
    <Route exact path="/" render={renderMaterials(props)} />
    <Route path="/:id" render={renderMaterial(props)} />
  </Switch>
)
