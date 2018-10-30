import React from 'react'
import Link from 'react-router-dom/Link'
import Colors from '../Colors'
import './Logo.css'

export default props => (
  <div className="logo" style={{ flex: 1 }}>
    <Link to="/" style={{ textDecoration: 'none', color: Colors.black }}>
      <img
        className="image"
        src="/images/logo.png"
        alt="logo"
        style={{
          display: 'inline-block',
          marginRight: 10,
          verticalAlign: 'middle',
          width: '280px',
        }}
      />
    </Link>
  </div>
)
