import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'

import Rating from '../../reviews/Rating'

export default ({ id, averageRating }) => (
  <div>
    <Rating rating={averageRating} />
    <Link
      to={`/${id}/reviews/new`}
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <Button>Avaliar</Button>
    </Link>
    <Link
      to={`/${id}/reviews`}
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <Button>Ver avaliações</Button>
    </Link>
  </div>
)
