import React from 'react'
import Route from 'react-router-dom/Route'

import renderInfo from './renderInfo'
import renderPremium from './renderPremium'
import renderPay from './renderPay'
import renderSuccess from './renderSuccess'
import renderMember from './renderMember'

export default props => (
  <div>
    <Route path="/albums/:id" render={renderInfo(props)} />
    <Route exact path="/albums/:id/premium" render={renderPremium(props)} />
    <Route exact path="/albums/:id/premium/pay" render={renderPay(props)} />
    <Route
      exact
      path="/albums/:id/premium/success"
      render={renderSuccess(props)}
    />
    <Route exact path="/albums/:id/member" render={renderMember(props)} />
  </div>
)
