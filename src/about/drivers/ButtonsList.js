import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ResponsiveGrid from '../ResponsiveGrid'

import gridStyle from '../gridStyle'
import Button from './Button'

export default withStyles(gridStyle)(props => (
  <ResponsiveGrid
    className={props.classes.grid}
    style={{
      marginTop: '5%',
      marginBottom: '5%',
    }}
  >
    <Button color="default" text="Clickable 1" />
    <Button color="primary" text="Clickable 2" />
    <Button color="secondary" text="Clickable 3" />
    <Button color="default" text="Clickable 4" />
  </ResponsiveGrid>
))
