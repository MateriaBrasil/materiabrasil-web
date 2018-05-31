import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import Materials from './materials/Materials'
import Material from './material/Material'

export default () => (
  <Switch>
    <Route exact path="/" component={Materials} />
    <Route exact path="/:materialId" component={Material} />
  </Switch>
)
