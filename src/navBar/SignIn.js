import React from 'react'
import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography'

export default () => (
  <Link to="/auth/sign-in" style={{ textDecoration: 'none', color: 'black' }}>
    <Typography variant="subheading" color="inherit">
      Login
    </Typography>
  </Link>
)
