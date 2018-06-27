import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import SignOut from '../auth/signOut/SignOut'
import Logo from './Logo'
import SignIn from './SignIn'

export default props => {
  const { currentUser } = props

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Logo />
        {currentUser && currentUser.name ? (
          <div>
            <Typography
              variant="subheading"
              color="inherit"
              style={{ display: 'inline-block', marginRight: 10 }}
            >
              {currentUser.name}
            </Typography>|
            <SignOut {...props} />
          </div>
        ) : (
          <SignIn />
        )}
      </Toolbar>
    </AppBar>
  )
}
