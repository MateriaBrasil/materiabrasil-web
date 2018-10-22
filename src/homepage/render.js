import React, { Fragment } from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from './Grid'
import Video from './Video'

export default props => routeProps => (
  <Fragment>
    <Grid>
      <Typography
        variant="display2"
        color="inherit"
        className="text"
        style={{
          color: '#fff',
          display: 'inline-block',
          verticalAlign: 'middle',
          fontWeight: 300,
        }}
      >
        Na <span style={{ fontWeight: 400 }}>Materia</span>
        Mundi, nós ajudamos indústrias e consumidores a implementar ações para
        uma economia circular aplicada.
      </Typography>
    </Grid>

    <Grid isVideo>
      <Video />
    </Grid>

    <Grid>
      <Link to={`/materials`} style={{ textDecoration: 'none' }}>
        <Button
          variant="raised"
          color="default"
          size="large"
          style={{
            borderRadius: 7,
            fontWeight: 100,
            textTransform: 'lowercase',
            fontSize: 40,
            padding: '15px 50px',
            background: '#fff',
          }}
        >
          Explore
        </Button>
      </Link>
      <p
        style={{
          color: '#fff',
          position: 'absolute',
          bottom: 20,
          width: '100%',
          textAlign: 'center',
          fontFamily: 'roboto',
        }}
      >
        Apoio: Instituto C&A; <br />
        Parceiros: Good Tech Lab, Fab City Global, Materiom;
        <br />
        Membro: Sistema B Brasil e CE100 Global Ellen MacArthur Foundation.
      </p>
    </Grid>
  </Fragment>
)
