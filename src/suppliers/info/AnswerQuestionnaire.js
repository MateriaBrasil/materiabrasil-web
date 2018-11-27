import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'

export default props => {
  const { id, currentUser, supplier } = props
  const editable =
    currentUser && currentUser.id.toString() === supplier.userId.toString()

  return editable ? (
    <Link
      style={{ textDecoration: 'none' }}
      to={`/suppliers/${id}/questionnaires`}
    >
      <Button variant="contained" color="primary" style={{ marginTop: 10 }}>
        Responder questionários
      </Button>
    </Link>
  ) : null
}
