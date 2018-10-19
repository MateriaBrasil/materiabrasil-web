import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

export default props => routeProps => (
  <Grid
    container
    spacing={32}
    style={{
      backgroundImage: 'url("https://picsum.photos/1920/900/?random")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <Grid
      item
      xs={12}
      sm={8}
      md={6}
      style={{
        margin: '400px auto',
        textAlign: 'center',
      }}
    >
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
  </Grid>
)
