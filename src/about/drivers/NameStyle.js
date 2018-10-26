import React from 'react'
import Typography from '@material-ui/core/Typography'

export default props => (
  <li style={{ textAlign: 'center' }}>
    <Typography
      variant="h5"
      color="inherit"
      style={{
        color: '#fff',
        fontWeight: 500,
        margin: '30px',
      }}
    >
      {props.children}
    </Typography>
  </li>
)
