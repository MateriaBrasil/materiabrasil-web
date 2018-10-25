import React from 'react'
import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography'
import Colors from '../Colors'
import './Link.css'

export default ({ to, text, isInstitutionalPage, targetBlank }) => (
  <Link
    className="navbar-link"
    to={to}
    target={targetBlank ? '_blank' : '_self'}
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
      {text}
    </Typography>
  </Link>
)
