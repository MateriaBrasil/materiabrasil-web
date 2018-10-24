import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import Video from '../../Video'

const styles = theme => ({
  grid: {
    [theme.breakpoints.down('md')]: {
      padding: '100px 0',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '50px 0',
    },
    position: 'relative',
    padding: '100px 0',
    margin: '0 auto',
    overflow: 'hidden',
    textAlign: 'center',
  },
})

export default withStyles(styles)(props => (
  <Grid
    item
    sm={8}
    xs={12}
    md={6}
    className={props.classes.grid}
    style={{
      paddingTop: '35%',
      position: 'relative',
    }}
  >
    <Video />
  </Grid>
))
