import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from './Grid'
import Video from './Video'

export default props => routeProps => (
  <div style={{ overflow: 'hidden' }}>
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

    <Grid isVideo>
      <Video />
    </Grid>

    <Grid>
      <Link to={`/materials`} style={{ textDecoration: 'none' }}>
        <Button variant="raised" color="default" size="large">
          Explore
        </Button>
      </Link>
    </Grid>
  </div>
)
