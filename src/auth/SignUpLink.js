import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from 'react-router-dom/Link'

export default ({ pathname, text }) => (
  <Typography variant="body1" color="inherit">
    <Link
      to={{
        pathname: '/auth/sign-up',
        state: { referrer: pathname },
      }}
      style={{ textDecoration: 'none' }}
    >
      Cadastre-se
    </Link>{' '}
    <span>{text}</span>
  </Typography>
)
