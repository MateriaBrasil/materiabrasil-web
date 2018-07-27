import React from 'react'
import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography'

export default ({ location: { pathname } }) => (
  <Link
    to={{
      pathname: '/auth/sign-in',
      state: { referrer: pathname },
    }}
    style={{ textDecoration: 'none', color: 'black' }}
  >
    <Typography variant="subheading" color="inherit">
      Entrar
    </Typography>
  </Link>
)
