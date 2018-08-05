import React from 'react'
import Route from 'react-router-dom/Route'

import Children from '../Children'
import renderInfo from './renderInfo'
import renderEdit from './renderEdit'
import renderImageUpload from '../imageUpload/render'

export default props => {
  const { currentUser } = props
  const { id } = currentUser || {}

  return (
    <Children>
      <Route exact path="/users/:id" render={renderInfo(props)} />
      <Route path="/profile" render={renderInfo({ ...props, id })} />
      <Route path="/profile/edit" render={renderEdit({ ...props, id })} />
      <Route exact path="/profile/avatar" render={renderImageUpload(props)} />
    </Children>
  )
}
