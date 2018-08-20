import React from 'react'
import Link from 'react-router-dom/Link'

export default ({ id, imageUrl, name }) => (
  <Link to={`/${id}`}>
    <img
      src={imageUrl}
      alt={name}
      style={{ width: '100%', objectFit: 'cover', height: 360 }}
    />
  </Link>
)
