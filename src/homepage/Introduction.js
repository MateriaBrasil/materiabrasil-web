import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import Grid from './Grid'
import Colors from '../Colors'

const polygon = 'polygon(0 0, 100% 0%, 100% 91%, 0% 100%)'

const styles = theme => ({
  text: {
    color: Colors.white,
    padding: '0 20px',
    fontSize: 20,
    paddingTop: 50,
    [theme.breakpoints.up('lg')]: {
      fontSize: 36,
    },
  },
})

export default withStyles(styles)(({ classes }) => (
  <Grid
    id="introduction"
    backgroundImage="url('https://s3.amazonaws.com/materiamundi-us/static/backgrounds/material-7.jpg')"
    style={{ WebkitClipPath: polygon, clipPath: polygon }}
  >
    <Typography variant="h4" className={classes.text}>
      Na Materia
      <span style={{ fontWeight: 'bold' }}>Mundi</span>, nós ajudamos indústrias
      e consumidores a implementar ações para uma economia circular aplicada.
    </Typography>
  </Grid>
))
