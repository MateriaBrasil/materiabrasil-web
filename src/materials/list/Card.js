import React from 'react'
import Link from 'react-router-dom/Link'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

import CardContent from './CardContent'
import CardActions from './CardActions'

export default props => {
  const { imageUrl, name, id } = props

  return (
    <Card className="list-card">
      <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
        <CardMedia
          style={{ height: 0, paddingTop: '70%' }}
          image={imageUrl}
          title={name}
        />
        <CardContent {...props} />
      </Link>
      <CardActions {...props} />
    </Card>
  )
}
