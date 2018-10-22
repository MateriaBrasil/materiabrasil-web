import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const styles = theme => ({
  grid: {
    position: 'relative',
    margin: '0 auto',
    overflow: 'hidden',
    textAlign: 'center',
  },
})

export default withStyles(styles)(props => {
  return (
    <Grid
      style={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundImage: 'url("https://picsum.photos/1920/900/?random")',
      }}
      container
    >
      <Grid
        sm={8}
        xs={12}
        item
        style={{
          position: 'relative',
        }}
        className={props.classes.grid}
        md={6}
      >
        {props.children}
      </Grid>
    </Grid>
  )
})
