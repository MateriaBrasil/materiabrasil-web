import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default ({ name, supplierName, manufacturingLocation }) => (
  <CardContent>
    <Typography variant="subheading" color="textSecondary">
      {name}
    </Typography>
    <div style={{ marginTop: 5 }}>
      <Typography
        variant="caption"
        color="textSecondary"
        style={{ float: 'left' }}
      >
        {supplierName}
      </Typography>
      <Typography
        variant="caption"
        color="textSecondary"
        style={{ float: 'right' }}
      >
        {manufacturingLocation}
      </Typography>
    </div>
    <div style={{ clear: 'both' }} />
  </CardContent>
)
