import React from 'react'
import Card from '@material-ui/core/Card'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default ({ image, heading }) => (
  <Card style={{ width: 300, height: 250 }}>
    <CardMedia
      style={{ height: 0, paddingTop: '56.25%' }}
      image={image}
      title="Material image"
    />
    <CardContent>
      <Typography variant="subheading" color="textSecondary">
        {heading}
      </Typography>
    </CardContent>
  </Card>
)
