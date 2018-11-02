import React from 'react'
import Typography from '@material-ui/core/Typography'

import HomepageGrid from './HomepageGrid'
import Colors from '../Colors'

export default () => (
  <HomepageGrid
    id="introduction"
    backgroundImage="url('https://s3.amazonaws.com/materiamundi-us/static/backgrounds/material-1.jpg')"
  >
    <Typography
      variant="h3"
      color="inherit"
      className="text"
      style={{
        color: Colors.white,
        display: 'inline-block',
        verticalAlign: 'middle',
        padding: '0 20px',
      }}
    >
      Na Materia
      <span style={{ fontWeight: 'bold' }}>Mundi</span>, nós ajudamos indústrias
      e consumidores a implementar ações para uma economia circular aplicada.
    </Typography>
  </HomepageGrid>
)
