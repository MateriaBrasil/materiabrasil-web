import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default () => (
  <AppBar position="static" color="default">
    <Toolbar>
      <img src="images/logo-small.jpg" alt="logo" style={{ marginRight: 10 }} />
      <Typography variant="display1" color="inherit">
        MateriaBrasil
      </Typography>
    </Toolbar>
  </AppBar>
)
