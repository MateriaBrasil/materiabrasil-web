import React from 'react'
import Route from 'react-router-dom/Route'

import renderInfo from './renderInfo'
import renderPremium from '../payments/renderPremium'
import renderPay from '../payments/renderPay'
import renderSuccess from '../payments/renderSuccess'
import renderMember from './renderMember'

export default props => (
  <div>
    <Route path="/albums/:id" render={renderInfo(props)} />
    <Route exact path="/albums/:id/premium" render={renderPremium(props)} />
    <Route exact path="/albums/:id/pay" render={renderPay(props)} />
    <Route exact path="/albums/:id/success" render={renderSuccess(props)} />
    <Route exact path="/albums/:id/member" render={renderMember(props)} />
  </div>
)
