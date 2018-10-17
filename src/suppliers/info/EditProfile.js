import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'

export default props => {
  const { currentUser, supplier } = props
  const editProfile =
    currentUser && currentUser.id.toString() === supplier.userId.toString()

  return editProfile ? (
    <Link
      to={`/suppliers/${supplier.id}/edit`}
      style={{ textDecoration: 'none', marginRight: '5px' }}
    >
      <Button variant="raised" color="primary">
        Editar perfil
      </Button>
    </Link>
  ) : null
}
