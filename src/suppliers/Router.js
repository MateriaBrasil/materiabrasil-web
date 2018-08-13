import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import renderNew from './renderNew'
import renderEdit from './renderEdit'
import renderInfo from './renderInfo'
import renderImageUpload from './renderImageUpload'

export default props => (
  <Switch>
    <Route path="/suppliers/new" render={renderNew(props)} />
    <Route exact path="/suppliers/:id/edit" render={renderEdit(props)} />
    <Route exact path="/suppliers/:id/avatar" render={renderImageUpload(props)} />
    <Route exact path="/suppliers/:id" render={renderInfo(props)} />
  </Switch>
)
