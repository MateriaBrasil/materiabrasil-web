import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Logo from './Logo'
import SignIn from './SignIn'

export default props => {
  const { currentUser } = props

  return (
    <AppBar position="static" color="inherit">
      <Toolbar>
        <Logo />
        {currentUser.name ? (
          <Typography variant="subheading" color="inherit">
            {currentUser.name}
          </Typography>
        ) : (
          <SignIn />
        )}
      </Toolbar>
    </AppBar>
  )
}
