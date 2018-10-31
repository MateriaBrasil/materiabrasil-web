import React from 'react'
import { withRouter } from 'react-router'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'

import LinksOrMenu from './LinksOrMenu'
import Logo from './Logo'

export default withRouter(props => {
  return (
    <AppBar position={'absolute'} color="inherit" elevation={0}>
      <Toolbar>
        <Logo {...props} />
        <LinksOrMenu {...props} />
      </Toolbar>
    </AppBar>
  )
})
