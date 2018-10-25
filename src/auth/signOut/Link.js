import React from 'react'
import Typography from '@material-ui/core/Typography'

import onClick from '../../onClick'
import Colors from '../../Colors'

export default ({ destroy, isInstitutionalPage }) => (
  <a
    className="navbar-link"
    href="#destroy"
    onClick={onClick(destroy)}
    style={{
      color: isInstitutionalPage ? Colors.white : Colors.black,
      marginLeft: 20,
    }}
  >
    <Typography
      variant="subtitle1"
      color="inherit"
      style={{ display: 'inline-block', alignSelf: 'center' }}
    >
      Sair
    </Typography>
  </a>
)
