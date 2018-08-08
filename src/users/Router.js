import React, { Fragment } from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import renderInfo from './renderInfo'
import renderEdit from './renderEdit'
import renderImageUpload from '../imageUpload/render'

export default props => {
  const { currentUser } = props
  const { id } = currentUser || {}

  return (
    <Switch>
      <Route exact path="/users/:id" render={renderInfo(props)} />
      <Route exact path="/profile/edit" render={renderEdit({ ...props, id })} />
      <Route exact path="/profile/avatar" render={renderImageUpload(props)} />
      <Route path="/profile" render={renderInfo({ ...props, id })} />
    </Switch>
  )
}
