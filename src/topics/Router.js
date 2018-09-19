import React, { Fragment } from 'react'
import Route from 'react-router-dom/Route'

import renderList from './renderList'
import renderNew from './renderNew'

export default props => {
  return (
    <Fragment>
      <Route exact path="/forum" render={renderList(props)} />
      <Route path="/forum/new" render={renderList(props)} />
      <Route path="/forum/new" render={renderNew(props)} />
    </Fragment>
  )
}
