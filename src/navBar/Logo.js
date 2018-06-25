import React from 'react'
import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography'

export default () => (
  <div style={{ flex: 1 }}>
    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
      <img
        src="/images/logo-small.jpg"
        alt="logo"
        style={{
          display: 'inline-block',
          marginRight: 10,
          verticalAlign: 'middle',
        }}
      />
      <Typography
        variant="headline"
        color="inherit"
        style={{ display: 'inline-block', verticalAlign: 'middle' }}
      >
        MateriaBrasil
      </Typography>
    </Link>
  </div>
)
