import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'

import Links from './Links'
import Supplier from './Supplier'

export default props => {
  const { id, code, description } = props

  return (
    <Grid item xs={12} sm={6} lg={5}>
      <Typography variant="caption" style={{ marginBottom: 16 }}>
        {code}
      </Typography>
      <Typography variant="subheading" style={{ marginBottom: 24 }}>
        {description}
      </Typography>
      <Divider style={{ marginBottom: 24 }} />
      <Supplier {...props} />
      <Divider style={{ marginTop: 24, marginBottom: 24 }} />
      <Links {...props} />
      <Link
        to={`/${id}/reviews/new`}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        <Button>Avalie</Button>
      </Link>
    </Grid>
  )
}
