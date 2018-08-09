import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from 'react-router-dom/Link'

import Rating from './Rating'

export default props => {
  const { material, renderIcons } = props
  const { id, name } = material

  return (
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 90,
        background: 'rgba(0, 0, 0, 0.6)',
        color: 'white',
        padding: 20,
      }}
    >
      <div style={{ float: 'left' }}>
        <Link
          to={`/${id}`}
          style={{ textDecoration: 'none', color: 'white', display: 'block' }}
        >
          <Typography variant="subheading" color="inherit">
            {name}
          </Typography>
        </Link>
        <Rating {...material} />
      </div>
      {renderIcons && <div style={{ float: 'right' }}>{renderIcons()}</div>}
    </div>
  )
}
