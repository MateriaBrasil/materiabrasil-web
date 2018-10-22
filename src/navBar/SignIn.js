import React from 'react'
import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography'

export default ({ location: { pathname }, isTransparent }) => (
  <Link
    className="navbar-link"
    to={{
      pathname: '/auth/sign-in',
      state: { referrer: pathname },
    }}
    style={{
      textDecoration: 'none',
      color: isTransparent ? 'white' : 'black',
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
