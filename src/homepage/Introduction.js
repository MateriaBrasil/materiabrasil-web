import React from 'react'
import Typography from '@material-ui/core/Typography'

import Grid from './Grid'
import Colors from '../Colors'

const polygon = 'polygon(0 0, 100% 0%, 100% 86%, 0% 100%)'

export default () => (
  <Grid
    id="introduction"
    backgroundImage="url('https://s3.amazonaws.com/materiamundi-us/static/backgrounds/material-7.jpg')"
    style={{ '-webkit-clip-path': polygon, clipPath: polygon }}
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
  </Grid>
)
