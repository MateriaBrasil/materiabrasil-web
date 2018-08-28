import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import renderNewMaterial from '../materials/renderNew'

import renderNew from './renderNew'
import renderEdit from './renderEdit'
import renderInfo from './renderInfo'
import renderImageUpload from './renderImageUpload'

export default props => {
  return (
    <Switch>
      <Route
        path="/suppliers/:id/materials/new"
        render={renderNewMaterial(props)}
      />
      <Route path="/suppliers/new" render={renderNew(props)} />
      <Route
        exact
        path="/suppliers/:id/avatar"
        render={renderImageUpload(props)}
      />
      <Route exact path="/suppliers/:id/edit" render={renderEdit(props)} />
      <Route exact path="/suppliers/:id" render={renderInfo(props)} />
    </Switch>
  )
}
