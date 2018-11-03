import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import Colors from '../../Colors'

const styles = theme => ({
  style: {
    textAlign: 'center',
    color: Colors.white,
    marginBottom: 10,
  },
})

export default withStyles(styles)(({ classes, title, children }) => (
  <Fragment>
    <Typography variant="h6" className={classes.style}>
      {title}
    </Typography>
    <Typography className={classes.style}>{children}</Typography>
  </Fragment>
))
