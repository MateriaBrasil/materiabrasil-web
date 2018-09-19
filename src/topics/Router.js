import React, { Fragment } from 'react'
import Route from 'react-router-dom/Route'

import renderList from './renderList'

export default props => {
  return (
    <Fragment>
      <Route path="/forum" render={renderList(props)} />
    </Fragment>
  )
}
