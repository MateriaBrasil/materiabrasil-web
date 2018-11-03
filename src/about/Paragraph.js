import React from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import gridStyle from './gridStyle'
import Colors from '../Colors'

const styles = theme => ({
  text: {
    display: 'inline-block',
    verticalAlign: 'middle',
    marginLeft: '1%',
    marginRight: '1%',
    marginBottom: '2%',
    padding: '0 6%',
    fontSize: 14,
    [theme.breakpoints.up('lg')]: {
      fontSize: 20,
    },
  },
  ...gridStyle(theme),
})

export default withStyles(styles)(({ classes, ...props }) => (
  <Grid item xs={12} className={classes.grid}>
    <Typography
      variant="h6"
      className={classes.text}
      style={{ color: props.color ? Colors.black : Colors.white }}
    >
      {props.children}
    </Typography>
  </Grid>
))
