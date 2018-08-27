import React, { Fragment } from 'react'
import Link from 'react-router-dom/Link'
import Typography from '@material-ui/core/Typography'

export default props => {
  const { currentUser, supplier } = props
  const editProfile =
    currentUser && currentUser.id.toString() === supplier.userId.toString()

  return (
    <Fragment>
      {editProfile ? (
        <Link to={`/suppliers/${supplier.id}/edit`}>
          <Typography variant="subheading">Editar perfil</Typography>
        </Link>
      ) : null}
    </Fragment>
  )
}
