import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default ({ name, supplierName, manufacturingLocation }) => (
  <CardContent>
    <Typography variant="subheading" color="textSecondary">
      {name}
    </Typography>
    <div style={{ marginTop: 10 }}>
      <Typography
        variant="caption"
        color="textSecondary"
        style={{ marginBottom: 4 }}
      >
        {supplierName}
      </Typography>
      <Typography variant="caption" color="textSecondary">
        {manufacturingLocation}
      </Typography>
    </div>
    <div style={{ clear: 'both' }} />
  </CardContent>
)
