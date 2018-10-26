import React from 'react'
import { withStyles } from '@material-ui/core/styles'

import ResponsiveGrid from '../ResponsiveGrid'
import Video from '../../Video'
import gridStyle from '../gridStyle'

export default withStyles(gridStyle)(props => (
  <ResponsiveGrid
    className={props.classes.grid}
    style={{
      padding: '30%',
      position: 'relative',
    }}
  >
    <Video />
  </ResponsiveGrid>
))
