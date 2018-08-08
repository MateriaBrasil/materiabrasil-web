import React from 'react'
import { withRouter } from 'react-router'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import Links from './Links'
import Logo from './Logo'
import SignIn from './SignIn'

export default withRouter(props => {
  const { currentUser } = props

  return (
    <AppBar position="static" color="inherit" elevation={0}>
      <Toolbar>
        <Logo />
        {currentUser ? <Links {...props} /> : <SignIn {...props} />}
      </Toolbar>
    </AppBar>
  )
})
