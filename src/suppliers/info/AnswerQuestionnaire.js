import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'

export default props => {
  const { id } = props

  return (
    <Link
      style={{ textDecoration: 'none' }}
      to={`/suppliers/${id}/questionnaires`}
    >
      <Button variant="raised" color="primary">
        Responder questionários
      </Button>
    </Link>
  )
}
