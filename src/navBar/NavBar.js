import React from 'react'
import { withRouter } from 'react-router'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import SignOut from '../auth/signOut/SignOut'
import User from '../users/Link'
import Logo from './Logo'
import SignIn from './SignIn'

export default withRouter(props => {
  const { currentUser } = props

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Logo />
        {currentUser && currentUser.name ? (
          <div>
            <User {...props} />
            <SignOut {...props} />
          </div>
        ) : (
          <SignIn {...props} />
        )}
      </Toolbar>
    </AppBar>
  )
})
