import React from 'react'
import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography'
import './Link.css'

export default ({ to, text }) => (
  <Link
    className="navbar-link"
    to={to}
    style={{
      textDecoration: 'none',
      color: 'black',
      marginLeft: 20,
      marginRight: 20,
    }}
  >
    <Typography
      variant="subheading"
      color="inherit"
      style={{ display: 'inline-block', alignSelf: 'center' }}
    >
      {text}
    </Typography>
  </Link>
)
