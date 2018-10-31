import React from 'react'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

const style = {
  opacityOnHover: {
    '&:hover': {
      opacity: 0.3,
    },
  },
}

export default withStyles(style)(props => (
  <Button className={props.classes.opacityOnHover}>{props.children}</Button>
))
