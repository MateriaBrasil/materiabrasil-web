import React from 'react'
import Link from 'react-router-dom/Link'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'

import CardContent from './CardContent'

export default props => {
  const { imageUrl, name, id } = props

  return (
    <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
      <Card className="list-card">
        <CardMedia
          style={{ height: 0, paddingTop: '56.25%' }}
          image={imageUrl}
          title={name}
        />
        <CardContent {...props} />
      </Card>
    </Link>
  )
}
