import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'

import Rating from '../../reviews/Rating'
import Colors from '../../Colors'

export default ({ id, averageRating, currentUser }) => {
  const newReviewPath = `/materials/${id}/reviews/new`

  return (
    <div style={{ marginBottom: 20 }}>
      <Rating rating={averageRating} />
      <Link
        to={
          currentUser
            ? newReviewPath
            : {
                pathname: '/auth/sign-up',
                state: { referrer: newReviewPath },
              }
        }
        style={{ textDecoration: 'none', color: Colors.black }}
      >
        <Button style={{ marginTop: -10 }}>Avaliar</Button>
      </Link>
      {averageRating && (
        <Link
          to={`/materials/${id}/reviews`}
          style={{ textDecoration: 'none', color: Colors.black }}
        >
          <Button style={{ marginTop: -10 }}>Ver avaliações</Button>
        </Link>
      )}
    </div>
  )
}
