import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'

export default props => {
  const { id } = props

  return (
    <Link
      to={`/${id}/categories`}
      style={{ textDecoration: 'none', marginRight: 24 }}
    >
      <Button variant="raised" color="primary" style={{ marginBottom: 24 }}>
        Editar categorias
      </Button>
    </Link>
  )
}
