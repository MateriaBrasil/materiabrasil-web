import React from 'react'
import Route from 'react-router-dom/Route'

import renderInfo from './renderInfo'
import renderPremium from './renderPremium'

export default props => (
  <div>
    <Route path="/albums/:id" render={renderInfo(props)} />
    <Route exact path="/albums/:id/premium" render={renderPremium(props)} />
  </div>
)
