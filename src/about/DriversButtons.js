import React from 'react'
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Link from 'react-router-dom/Link'

import gridStyle from './gridStyle'

export default withStyles(gridStyle)(props => (
  <Grid item xs={12} className={props.classes.grid}>
    <Link to={`/materials`} style={{ textDecoration: 'none', marginRight: 24 }}>
      <Button
        variant="contained"
        color="default"
        style={{
          borderRadius: 7,
          fontWeight: '30px',
          textTransform: 'lowercase',
          fontSize: 30,
          marginLeft: '5px',
          marginRight: '5px',
          marginTop: '5px',
          marginBottom: '5px',
        }}
      >
        Clickable 1
      </Button>
    </Link>

    <Link to={`/materials`} style={{ textDecoration: 'none', marginRight: 24 }}>
      <Button
        variant="contained"
        color="primary"
        style={{
          borderRadius: 7,
          fontWeight: '30px',
          textTransform: 'lowercase',
          fontSize: 30,
          marginLeft: '5px',
          marginRight: '5px',
          marginTop: '5px',
          marginBottom: '5px',
        }}
      >
        Clickable 2
      </Button>
    </Link>

    <Link to={`/materials`} style={{ textDecoration: 'none', marginRight: 24 }}>
      <Button
        variant="contained"
        color="secondary"
        style={{
          borderRadius: 7,
          textTransform: 'lowercase',
          fontSize: 30,
          marginLeft: '5px',
          marginRight: '5px',
          marginTop: '5px',
          marginBottom: '5px',
        }}
      >
        Clickable 3
      </Button>
    </Link>

    <Link to={`/materials`} style={{ textDecoration: 'none', marginRight: 24 }}>
      <Button
        variant="contained"
        color="default"
        style={{
          borderRadius: 7,
          fontWeight: '30px',
          textTransform: 'lowercase',
          fontSize: 30,
          marginLeft: '5px',
          marginRight: '5px',
          marginTop: '5px',
          marginBottom: '5px',
        }}
      >
        Clickable 4
      </Button>
    </Link>
  </Grid>
))
