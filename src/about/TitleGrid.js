import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

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
    className={props.classes.grid}
    xs={12}
    item
    style={{
      paddingTop: '5%',
      position: 'relative',
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
        fontWeight: 500,
        marginBottom: 40,
      }}
    >
      {props.children}
    </Typography>
  </Grid>
))
