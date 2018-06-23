import React from 'react'
import Route from 'react-router-dom/Route'
import Switch from 'react-router-dom/Switch'

import renderSignIn from './signIn/render'
import renderSignUp from './signUp/render'

export default props => (
  <Switch>
    <Route exact path="/auth/sign-in" render={renderSignIn(props)} />
    <Route exact path="/auth/sign-up" render={renderSignUp(props)} />
  </Switch>
)
