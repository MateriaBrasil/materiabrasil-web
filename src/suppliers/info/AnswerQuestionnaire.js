import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import get from 'lodash/get'

export default props => {
  const { id, currentUser, supplier } = props
  const editable =
    get(currentUser, 'admin', false) ||
    get(supplier, 'userId', 'supplierNoExist').toString() ===
      get(currentUser, 'id', 'currentUserNoExist').toString()

  return (
    <Link
      style={{ textDecoration: 'none' }}
      to={`/suppliers/${id}/questionnaires`}
    >
      <Button variant="contained" color="primary" style={{ marginTop: 10, fontSize: 12 }}>
        {editable ? 'Responder questionários do fornecedor' : 'Ver questionários do fornecedor'}
      </Button>
    </Link>
  )
}
