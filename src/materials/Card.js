import React from 'react'
import Link from 'react-router-dom/Link'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default ({ imageUrl, name, id }) => (
  <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
    <Card className="list-card">
      <CardMedia
        style={{ height: 0, paddingTop: '56.25%' }}
        image={imageUrl}
        title={name}
      />
      <CardContent>
        <Typography variant="subheading" color="textSecondary">
          {name}
        </Typography>
      </CardContent>
    </Card>
  </Link>
)
