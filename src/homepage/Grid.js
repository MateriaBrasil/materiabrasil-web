import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

import SectionTitle from './SectionTitle'

import Colors from '../Colors'

const styles = theme => ({
  grid: {
    textAlign: 'center',
    position: 'relative',
    overflow: 'hidden',
    margin: '0 auto',
    padding: '400px 0',
    [theme.breakpoints.down('md')]: {
      padding: '200px 0',
    },
    [theme.breakpoints.down('xs')]: {
      padding: '100px 0',
    },
  },
})

export default withStyles(styles)(props => {
  return (
    <Grid
      id={props.id}
      container
      style={{
        background: props.backgroundImage || Colors.grayNurse,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        ...props.style,
      }}
    >
      {props.title && (
        <Grid item xs={12}>
          <SectionTitle {...props}>{props.title}</SectionTitle>
        </Grid>
      )}
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        className={props.classes.grid}
        style={{
          position: 'relative',
        }}
      >
        {props.children}
      </Grid>
    </Grid>
  )
})
