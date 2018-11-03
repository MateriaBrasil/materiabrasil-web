import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const style = {
  button: {
    '&:hover': {
      opacity: 0.7,
      backgroundColor: 'transparent',
    },
  },
}

export default withStyles(style)(({ classes, children }) => (
  <div style={{ textAlign: 'center' }}>
    <Button className={classes.button}>{children}</Button>
  </div>
))
