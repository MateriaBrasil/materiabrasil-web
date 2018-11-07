import React from 'react'

export default ({ headline, title, alt, style, ...props }) => (
  <img
    {...props}
    title={title || alt}
    alt={alt || title}
    style={{ width: '100%', maxWidth: '170px', ...style }}
  />
)
