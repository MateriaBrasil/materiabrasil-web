import React from 'react'
import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography'
import './Logo.css'

export default () => (
  <div className="logo" style={{ flex: 1 }}>
    <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
      <img
        className="image"
        src="/images/logo-small.jpg"
        alt="logo"
        style={{
          display: 'inline-block',
          marginRight: 10,
          verticalAlign: 'middle',
        }}
      />
      <Typography
        variant="display2"
        color="inherit"
        className="text"
        style={{
          display: 'inline-block',
          verticalAlign: 'middle',
        }}
      >
        Materia<span style={{ fontWeight: 300 }}>Mundi</span>
      </Typography>
    </Link>
  </div>
)
