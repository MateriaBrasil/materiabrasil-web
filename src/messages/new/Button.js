import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'

export default props => (
  <Link
    to={`/${props.type}/${props.id}/messages/new`}
    style={{ textDecoration: 'none' }}
  >
    <Button variant="raised" color="primary" style={{ marginTop: 16 }}>
      Enviar mensagem
    </Button>
  </Link>
)
