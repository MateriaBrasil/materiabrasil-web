import React from 'react'
import Typography from '@material-ui/core/Typography'

import onClick from './onClick'

export default ({ destroy }) => (
  <a
    href="#destroy"
    onClick={onClick(destroy)}
    style={{
      display: 'inline-block',
      marginLeft: 10,
      textDecoration: 'none',
      color: 'black',
    }}
  >
    <Typography variant="subheading" color="inherit">
      Sair
    </Typography>
  </a>
)
