import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'

export default props => {
  const { id } = props

  return (
    <Link
      to={`/suppliers/${id}/questionnaires`}
      style={{ textDecoration: 'none' }}
    >
      <Button variant="raised" color="primary">
        Responder questionários
      </Button>
    </Link>
  )
}
