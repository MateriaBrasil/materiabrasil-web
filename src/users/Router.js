import React, { Fragment } from 'react'
import Route from 'react-router-dom/Route'

import renderInfo from './renderInfo'
import renderImageUpload from '../imageUpload/render'

export default props => {
  const { currentUser } = props
  const { id } = currentUser || {}

  return (
    <Fragment>
      <Route exact path="/users/:id" render={renderInfo(props)} />
      <Route path="/profile" render={renderInfo({ ...props, id })} />
      <Route exact path="/profile/avatar" render={renderImageUpload(props)} />
    </Fragment>
  )
}
