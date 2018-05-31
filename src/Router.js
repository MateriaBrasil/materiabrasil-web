import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import Materials from './materials/Materials'
import renderMaterial from './material/render'

export default props => (
  <Switch>
    <Route exact path="/" component={Materials} />
    <Route path="/:id" render={renderMaterial(props)} />
  </Switch>
)
