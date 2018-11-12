import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  image: {
    width: '100%',
    maxWidth: '320px',
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '170px',
      display: 'inline',
    },
  },
})

export default withStyles(styles)(
  ({ headline, title, alt, style, ...props }) => (
    <img
      {...props}
      title={title || alt}
      alt={alt || title}
      className={props.classes.image}
    />
  ),
)
