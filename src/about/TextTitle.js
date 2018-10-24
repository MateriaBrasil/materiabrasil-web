import React from 'react'
import Typography from '@material-ui/core/Typography'

export default props => (
  <Typography
    variant="h3"
    color="inherit"
    className="text"
    style={{
      color: '#fff',
      display: 'inline-block',
      verticalAlign: 'middle',
      fontWeight: 500,
      marginBottom: 40,
    }}
  >
    {props.children}
  </Typography>
)
