import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from 'react-router-dom/Link'

export default props => (
  <Typography variant="body1" color="inherit">
    <Link to="/auth/sign-up" style={{ textDecoration: 'none' }}>
      Cadastre-se
    </Link>{' '}
    <span>para deixar comentários.</span>
  </Typography>
)
