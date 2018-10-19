import React, { Fragment } from 'react'
import Grid from './Grid'
import Typography from '@material-ui/core/Typography'
import Video from './Video'

export default props => routeProps => (
  <Fragment>
    <Grid>
      <Typography
        variant="display2"
        color="inherit"
        className="text"
        style={{
          color: '#fff',
          display: 'inline-block',
          verticalAlign: 'middle',
          fontWeight: 300,
        }}
      >
        Na <span style={{ fontWeight: 400 }}>Materia</span>
        Mundi, nós ajudamos indústrias e consumidores a implementar ações para
        uma economia circular aplicada.
      </Typography>
    </Grid>

    <Grid>
      <Video />
    </Grid>
  </Fragment>
)
