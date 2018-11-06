import React from 'react'
import Typography from '@material-ui/core/Typography'

export default props => (
  <Typography variant="h4" style={{ marginTop: 16, marginBottom: 16 }}>
    {props.text}
  </Typography>
)
