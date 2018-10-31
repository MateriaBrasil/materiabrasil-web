import React from 'react'
import Typography from '@material-ui/core/Typography'

import Grid from '../InstitutionalPagesGrid'
import Colors from '../Colors'

export default () => (
  <Grid id="explore">
    <Typography
      variant="h3"
      color="inherit"
      className="text"
      style={{
        color: Colors.white,
        display: 'inline-block',
        verticalAlign: 'middle',
        fontWeight: 300,
        padding: '0 20px',
      }}
    >
      Na <span style={{ fontWeight: 400 }}>Materia</span>
      Mundi, nós ajudamos indústrias e consumidores a implementar ações para uma
      economia circular aplicada.
    </Typography>
  </Grid>
)
