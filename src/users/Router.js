import React, { Fragment } from 'react'
import Route from 'react-router-dom/Route'

import renderNewMessage from '../messages/renderNew'
import renderSuccessMessage from '../messages/renderSuccess'
import renderInfo from './renderInfo'
import renderEdit from './renderEdit'
import renderAvatarUpload from './renderAvatarUpload'
import renderPremium from '../payments/renderPremium'
import renderPay from '../payments/renderPay'
import renderSuccess from '../payments/renderSuccess'

export default props => {
  const { currentUser } = props
  const { id } = currentUser || {}
  const idProps = { ...props, id, name: 'users' }

  return (
    <Fragment>
      <Route path="/users/:id" render={renderInfo(props)} />
      <Route
        exact
        path="/users/:id/messages/new"
        render={renderNewMessage({ ...props, toType: 'User' })}
      />
      <Route
        exact
        path="/users/:id/messages/success"
        render={renderSuccessMessage({ ...props })}
      />
      <Route exact path="/profile/edit" render={renderEdit(idProps)} />
      <Route
        exact
        path="/profile/avatar"
        render={renderAvatarUpload({ ...idProps, redirectUrl: '/profile' })}
      />
      <Route path="/profile" render={renderInfo(idProps)} />
      <Route path="/profile/premium" render={renderPremium(idProps)} />
      <Route path="/profile/pay" render={renderPay(idProps)} />
      <Route path="/profile/success" render={renderSuccess(idProps)} />
    </Fragment>
  )
}
