import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import HomepageGrid from './HomepageGrid'
import Colors from '../Colors'

export default () => (
  <HomepageGrid id="explore">
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
        fontFamily: 'roboto',
        padding: '0 20px',
      }}
    >
      Apoio: Instituto C&A; <br />
      Parceiros: Good Tech Lab, Fab City Global, Materiom;
      <br />
      Membro: Sistema B Brasil e CE100 Global Ellen MacArthur Foundation.
    </Typography>
  </HomepageGrid>
)
