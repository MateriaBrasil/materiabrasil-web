import React from 'react'
import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography'
import './Link.css'

export default ({ to, text, isTransparent, targetBlank }) => (
  <Link
    className="navbar-link"
    to={to}
    target={targetBlank ? '_blank' : '_self'}
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
      {text}
    </Typography>
  </Link>
)
