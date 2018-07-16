import React from 'react'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

export default ({ name, supplierName, manufacturingLocation }) => (
  <CardContent style={{ paddingBottom: 0 }}>
    <Typography variant="title">{name}</Typography>
  </CardContent>
)
