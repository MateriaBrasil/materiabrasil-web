import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from 'react-router-dom/Link'

import Rating from './Rating'
import Colors from '../../Colors'
import './TitleBar.css'

export default props => {
  const { material, renderIcons } = props
  const { id, name, averageRating } = material

  return (
    <div className="title-bar">
      <div className="title-bar-text">
        <Link
          to={`/materials/${id}`}
          style={{
            textDecoration: 'none',
            color: Colors.white,
            display: 'block',
          }}
        >
          <Typography variant="subtitle1" color="inherit">
            {name}
          </Typography>
        </Link>
      </div>
      {averageRating && (
        <div className="title-bar-rating">
          <Rating {...material} />
        </div>
      )}
      {renderIcons && <div className="title-bar-icons">{renderIcons()}</div>}
    </div>
  )
}
