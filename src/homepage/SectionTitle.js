import React from 'react'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

import Colors from '../Colors'

const styles = theme => ({
  div: {
    position: 'absolute',
    width: '100%',
    zIndex: 1000,
    marginTop: -40,
    [theme.breakpoints.up('sm')]: {
      marginTop: -70,
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: -130,
    },
  },
  image: {
    width: 80,
    height: 80,
    [theme.breakpoints.up('sm')]: {
      width: 120,
      height: 120,
    },
    [theme.breakpoints.up('lg')]: {
      width: 250,
      height: 250,
    },
  },
  text: {
    fontSize: 24,
    position: 'absolute',
    bottom: 10,
    left: 20,
    color: Colors.white,
    fontWeight: 'bold',
    [theme.breakpoints.up('sm')]: {
      fontSize: 28,
    },
    [theme.breakpoints.up('lg')]: {
      bottom: 20,
      left: 50,
      fontSize: 48,
    },
  },
})

export default withStyles(styles)(({ image, style, children, classes }) => (
  <div className={classes.div}>
    <img src={image} alt="polygon" className={classes.image} />
    <Typography variant="h3" className={classes.text}>
      {children}
    </Typography>
  </div>
))
