import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from 'react-router-dom/Link'

export default props => {
  const { location } = props
  const { pathname } = location

  return (
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
      <span>para deixar comentários.</span>
    </Typography>
  )
}
