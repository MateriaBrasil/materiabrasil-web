import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  grid: {
    textAlign: 'center',
    padding: 0,
    position: 'relative',
    overflow: 'hidden',
    margin: '400px auto',
    [theme.breakpoints.down('md')]: {
      margin: '200px auto',
    },
    [theme.breakpoints.down('xs')]: {
      margin: '100px auto',
    },
  },
})

export default withStyles(styles)(props => {
  return (
    <Grid
      container
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
        className={props.classes.grid}
        style={{
          paddingTop: props.isVideo ? '35%' : 0,
        }}
      >
        {props.children}
      </Grid>
    </Grid>
  )
})
