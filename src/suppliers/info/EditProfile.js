import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import get from 'lodash/get'

export default props => {
  const { currentUser, supplier } = props
  const editProfile =
    get(currentUser, 'admin', false) ||
    get(currentUser, 'id', 'currentUserNoExist').toString() ===
      get(supplier, 'userId', 'supplierNoExist').toString()

  return editProfile ? (
    <Link
      to={`/suppliers/${supplier.id}/edit`}
      style={{ textDecoration: 'none', marginRight: '5px' }}
    >
      <Button variant="contained" color="primary">
        Editar perfil
      </Button>
    </Link>
  ) : null
}
