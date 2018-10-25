import React, { Fragment } from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Grid from '../InstitutionalPagesGrid'
import Video from '../Video'
import NavBar from '../navBar/NavBar'

export default props => routeProps => (
  <Fragment>
    <NavBar {...props} isInstitutionalPage="true" />
    <Grid>
      <Typography
        variant="h3"
        color="inherit"
        className="text"
        style={{
          color: '#fff',
          display: 'inline-block',
          verticalAlign: 'middle',
          fontWeight: 300,
          padding: '0 20px',
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
          color: '#fff',
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
    </Grid>
  </Fragment>
)
