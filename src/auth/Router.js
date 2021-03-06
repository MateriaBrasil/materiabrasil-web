import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import renderSignIn from './signIn/render'
import renderSignUp from './signUp/render'
import renderForgotPassword from './forgotPassword/render'
import renderEmailSent from './forgotPassword/renderEmailSent'
import renderResetPassword from './resetPassword/render'

export default props => (
  <Switch>
    <Route exact path="/auth/sign-in" render={renderSignIn(props)} />
    <Route exact path="/auth/sign-up" render={renderSignUp(props)} />
    <Route
      exact
      path="/auth/forgot-password"
      render={renderForgotPassword(props)}
    />
    <Route
      exact
      path="/auth/reset-password"
      render={renderResetPassword(props)}
    />
    <Route
      exact
      path="/auth/forgot-password/sent"
      render={renderEmailSent(props)}
    />
  </Switch>
)
