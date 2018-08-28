import React from 'react'
import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography'

export default ({ location: { pathname } }) => (
  <Link
    className="navbar-link"
    to={{
      pathname: '/auth/sign-in',
      state: { referrer: pathname },
    }}
    style={{
      textDecoration: 'none',
      margin: '0 auto',
      color: 'black',
    }}
  >
    <Typography
      variant="subheading"
      color="inherit"
      style={{ display: 'inline-block', alignSelf: 'center' }}
    >
      Entrar
    </Typography>
  </Link>
)
