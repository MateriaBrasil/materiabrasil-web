import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default () => (
  <AppBar position="static" color="inherit">
    <Toolbar>
      <img src="images/logo-small.jpg" alt="logo" style={{ marginRight: 10 }} />
      <Typography variant="headline" color="inherit">
        MateriaBrasil
      </Typography>
    </Toolbar>
  </AppBar>
)
