import React, { Fragment } from 'react'
import Route from 'react-router-dom/Route'

import renderNewMaterial from '../materials/renderNew'
import renderNewMessage from '../messages/renderNew'
import renderSuccessMessage from '../messages/renderSuccess'

import renderNew from './renderNew'
import renderEdit from './renderEdit'
import renderInfo from './renderInfo'
import renderImageUpload from './renderImageUpload'

export default props => {
  return (
    <Fragment>
      <Route path="/suppliers/:id(\d+)" render={renderInfo(props)} />
      <Route exact path="/suppliers/new" render={renderNew(props)} />
      <Route
        exact
        path="/suppliers/:id/materials/new"
        render={renderNewMaterial(props)}
      />
      <Route
        exact
        path="/suppliers/:id/messages/new"
        render={renderNewMessage({ ...props, toType: 'Supplier' })}
      />
      <Route
        exact
        path="/suppliers/:id/messages/success"
        render={renderSuccessMessage({ ...props })}
      />
      <Route
        exact
        path="/suppliers/:id/avatar"
        render={renderImageUpload(props)}
      />
      <Route exact path="/suppliers/:id/edit" render={renderEdit(props)} />
    </Fragment>
  )
}
