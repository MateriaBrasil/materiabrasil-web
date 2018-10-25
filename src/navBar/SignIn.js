import React from 'react'
import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography'
import Colors from '../Colors'

export default ({ location: { pathname }, isInstitutionalPage }) => (
  <Link
    className="navbar-link"
    to={{
      pathname: '/auth/sign-in',
      state: { referrer: pathname },
    }}
    style={{
      textDecoration: 'none',
      color: isInstitutionalPage ? Colors.white : Colors.black,
    }}
  >
    <Typography
      variant="subtitle1"
      color="inherit"
      style={{ display: 'inline-block', alignSelf: 'center' }}
    >
      Entrar
    </Typography>
  </Link>
)
