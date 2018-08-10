import React from 'react'
import Typography from '@material-ui/core/Typography'

import onClick from '../../onClick'

export default ({ destroy }) => (
  <a
    className="navbar-link"
    href="#destroy"
    onClick={onClick(destroy)}
    style={{ color: 'black', marginLeft: 20 }}
  >
    <Typography
      variant="subheading"
      color="inherit"
      style={{ display: 'inline-block', alignSelf: 'center' }}
    >
      Sair
    </Typography>
  </a>
)
