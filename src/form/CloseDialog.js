import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'

export default ({ id }) => (
  <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
    <Button color="primary">Fechar</Button>
  </Link>
)
