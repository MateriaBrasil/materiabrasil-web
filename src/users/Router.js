import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import renderInfo from './renderInfo'
import renderEdit from './renderEdit'
import renderImageUpload from '../imageUpload/render'

export default props => {
  const { currentUser } = props
  const { id } = currentUser || {}
  const idProps = { ...props, id, name: 'users' }

  return (
    <Switch>
      <Route exact path="/users/:id" render={renderInfo(props)} />
      <Route exact path="/profile/edit" render={renderEdit(idProps)} />
      <Route
        exact
        path="/profile/avatar"
        render={renderImageUpload({ ...idProps, redirectUrl: '/profile' })}
      />
      <Route path="/profile" render={renderInfo(idProps)} />
    </Switch>
  )
}
