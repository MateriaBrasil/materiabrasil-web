import React from 'react'
import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography'

export default ({ currentUser }) => (
  <Link to={`/profile`} style={{ textDecoration: 'none', color: 'black' }}>
    <Typography
      variant="subheading"
      color="inherit"
      style={{ display: 'inline-block', marginRight: 10 }}
    >
      {currentUser.firstName} {currentUser.lastName}
    </Typography>
  </Link>
)
