import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import SectionTitle from './SectionTitle'
import Grid from './Grid'
import Colors from '../Colors'

const polygon = 'polygon(0 0, 100% 12%, 100% 100%, 0% 100%)'

export default () => (
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
          style={{
            borderRadius: 7,
            fontWeight: 100,
            textTransform: 'lowercase',
            fontSize: 40,
            padding: '15px 50px',
            background: '#fff',
            marginBottom: 50,
          }}
        >
          Explore
        </Button>
      </Link>
      <Typography
        style={{
          color: Colors.white,
          position: 'absolute',
          bottom: 20,
          width: '100%',
          textAlign: 'center',
          padding: '0 20px',
        }}
      >
        Apoio: Instituto C&A; <br />
        Parceiros: Good Tech Lab, Fab City Global, Materiom;
        <br />
        Membro: Sistema B Brasil e CE100 Global Ellen MacArthur Foundation.
      </Typography>
    </Grid>
  </div>
)
