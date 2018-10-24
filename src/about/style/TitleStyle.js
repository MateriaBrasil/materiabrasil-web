import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import ParagraphStyle from './ParagraphStyle'

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
    <ParagraphStyle>{props.children}</ParagraphStyle>
  </Grid>
))
