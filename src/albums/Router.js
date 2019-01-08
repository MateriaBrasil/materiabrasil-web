import React from 'react'
import Route from 'react-router-dom/Route'

import renderInfo from './renderInfo'

export default props => (
  <div>
    <Route exact path="/albums/:id" render={renderInfo(props)} />
  </div>
)
