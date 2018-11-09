import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import Colors from '../Colors'

const styles = theme => ({
  name: {
    textAlign: 'center',
    fontSize: 14,
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
    },
  },
  job: {
    textAlign: 'center',
    fontSize: 10,
    [theme.breakpoints.up('lg')]: {
      fontSize: 14,
    },
  },
})

export default withStyles(styles)(({ classes, name, image, job, color }) => {
  const style = { color: color || Colors.white }

  return (
    <Grid item xs={6} sm={4} md={3} lg={2} style={{ padding: 20 }}>
      <img
        alt={name}
        src={image}
        style={{
          display: 'block',
          margin: '10px auto',
          width: '100%',
        }}
      />
      <Typography variant="h6" className={classes.name} style={style}>
        {name}
      </Typography>
      <Typography className={classes.job} style={style}>
        {job}
      </Typography>
    </Grid>
  )
})
