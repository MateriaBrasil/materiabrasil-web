import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  grid: {
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    margin: '0 auto',
    padding: '400px 0',
    [theme.breakpoints.down('md')]: {
      padding: '200px 0',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '100px 0',
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
          ...(props.isVideo && { paddingTop: '35%' }),
          position: 'relative',
        }}
      >
        {props.children}
      </Grid>
    </Grid>
  )
})
