import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default ({ imageUrl, name }) => (
  <Card style={{ height: 250 }}>
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
)
