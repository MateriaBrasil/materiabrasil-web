import React from 'react'
import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography'

export default ({ to, text }) => (
  <div style={{ textAlign: 'center', marginTop: 16 }}>
    <Link to={to}>
      <Typography>{text}</Typography>
    </Link>
  </div>
)
