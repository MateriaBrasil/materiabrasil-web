import React from 'react'
import Link from 'react-router-dom/Link'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

export default () => (
  <AppBar position="static" color="inherit">
    <Toolbar>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <img
          src="images/logo-small.jpg"
          alt="logo"
          style={{
            display: 'inline-block',
            marginRight: 10,
            verticalAlign: 'middle',
          }}
        />
        <Typography
          variant="headline"
          color="inherit"
          style={{ display: 'inline-block', verticalAlign: 'middle' }}
        >
          MateriaBrasil
        </Typography>
      </Link>
    </Toolbar>
  </AppBar>
)
