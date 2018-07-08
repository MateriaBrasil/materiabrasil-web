import React from 'react'
import Link from 'react-router-dom/Link'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardActions from '@material-ui/core/CardActions'

import CardContent from './CardContent'

export default props => {
  const { imageUrl, name, id, cardAction } = props

  return (
    <Card className="list-card">
      <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
        <CardMedia
          style={{ height: 0, paddingTop: '56.25%' }}
          image={imageUrl}
          title={name}
        />
        <CardContent {...props} />
      </Link>
      {cardAction && <CardActions>{cardAction}</CardActions>}
    </Card>
  )
}
