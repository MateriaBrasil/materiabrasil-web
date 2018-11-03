import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'

import SectionTitle from './SectionTitle'
import Grid from './Grid'

const polygon = 'polygon(0 0, 100% 6%, 100% 100%, 0% 100%)'

const styles = theme => ({
  button: {
    borderRadius: 7,
    fontWeight: 100,
    textTransform: 'lowercase',
    fontSize: 40,
    padding: '15px 50px',
    background: '#fff',
    marginBottom: 50,
  },
})

export default withStyles(styles)(({ classes }) => (
  <div style={{ position: 'relative' }}>
    <SectionTitle image="/images/polygon-3.png">Comece agora</SectionTitle>
    <Grid
      id="explore"
      backgroundImage="url('https://s3.amazonaws.com/materiamundi-us/static/backgrounds/material-6.jpg')"
      style={{
        WebkitClipPath: polygon,
        clipPath: polygon,
      }}
    >
      <Link to={`/materials`} style={{ textDecoration: 'none' }}>
        <Button
          variant="contained"
          color="default"
          size="large"
          className={classes.button}
        >
          Explore
        </Button>
      </Link>
    </Grid>
  </div>
))
