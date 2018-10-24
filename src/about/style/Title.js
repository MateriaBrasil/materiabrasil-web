import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import Paragraph from './Paragraph'
import Style from './Style'

export default withStyles(Style)(props => (
  <Grid
    className={props.classes.grid}
    xs={12}
    item
    style={{
      paddingTop: '5%',
      position: 'relative',
    }}
  >
    <Paragraph>{props.children}</Paragraph>
  </Grid>
))
