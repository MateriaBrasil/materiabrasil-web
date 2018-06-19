import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import Logo from './Logo'
import SignIn from './SignIn'

export default () => (
  <AppBar position="static" color="inherit">
    <Toolbar>
      <Logo />
      <SignIn />
    </Toolbar>
  </AppBar>
)
