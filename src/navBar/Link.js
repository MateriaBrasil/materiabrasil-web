import React from 'react'
import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography'
import './Link.css'

export default ({ to, text, isInstitutionalPage, targetBlank }) => (
  <Link
    className="navbar-link"
    to={to}
    target={targetBlank ? '_blank' : '_self'}
    style={{
      textDecoration: 'none',
      color: isInstitutionalPage ? 'white' : 'black',
    }}
  >
    <Typography
      variant="subtitle1"
      color="inherit"
      style={{ display: 'inline-block', alignSelf: 'center' }}
    >
      {text}
    </Typography>
  </Link>
)
