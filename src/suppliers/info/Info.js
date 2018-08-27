<<<<<<< HEAD
import React, { Fragment } from 'react'
import Link from 'react-router-dom/Link'
=======
import React, { Component } from 'react'
>>>>>>> 0a64e599791ce0b0ed21652ac1d483bce361b949
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

<<<<<<< HEAD

import SignUpLink from '../../auth/SignUpLink'
import PropertyWithValue from '../../PropertyWithValue'
import translateReach from './translateReach'
=======
import checkReloadAndFetch from '../../checkReloadAndFetch'
import InfoCard from './InfoCard'
>>>>>>> 0a64e599791ce0b0ed21652ac1d483bce361b949
import Avatar from '../../imageUpload/Avatar'
import Addresses from '../../addresses/Addresses'
import Materials from './Materials'

class Info extends Component {
  componentDidUpdate(prevProps) {
    checkReloadAndFetch(this.props)
  }
  render() {
    const { current, currentUser } = this.props
    const { userId, materials } = current
    const { id, name, imageUrl } = current
    const editPath =
      currentUser && userId === currentUser.id && `/suppliers/${id}/avatar`

<<<<<<< HEAD
  const editPath = currentUser && userId === currentUser.id && `/suppliers/${id}/avatar`

  return (
    <Grid container spacing={32}>
      <Grid item xs={12} lg={4}>
        <Avatar name={name} editPath={editPath} imageUrl={imageUrl} />
        <div>
=======
    return (
      <Grid container spacing={32}>
        <Grid item xs={12} lg={4}>
          <Avatar name={name} editPath={editPath} imageUrl={imageUrl} />
>>>>>>> 0a64e599791ce0b0ed21652ac1d483bce361b949
          <Typography
            variant="display1"
            style={{ marginTop: 16, marginBottom: 16 }}
          >
            {name}
          </Typography>
<<<<<<< HEAD
          {editPath && (
            <Link to={`/suppliers/${id}/edit`}>
              <Typography variant="subheading">Editar perfil</Typography>
            </Link>
          )}
        </div>

      </Grid>
      <Grid item xs={12} lg={8}>
        <Card>
          <CardContent>
            <PropertyWithValue
              title="Descrição"
              value={description}
              style={{ marginTop: 16 }}
            />
            <PropertyWithValue
              title="Alcance"
              value={translateReach(reach)}
              style={{ marginTop: 16 }}
            />
            {currentUser ? (
              <Fragment>
                <PropertyWithValue
                  title="Email"
                  value={email}
                  style={{ marginTop: 16 }}
                />
                <PropertyWithValue
                  title="Telefone"
                  value={phone}
                  style={{ marginTop: 16 }}
                />
              </Fragment>
            ) : (
              <div style={{ marginTop: 16 }}>
                <SignUpLink
                  pathname={pathname}
                  text="para ver o contato do fornecedor."
                />
              </div>
            )}
          </CardContent>
        </Card>
=======
        </Grid>
        <Grid item xs={12} lg={8}>
          <InfoCard {...this.props} />
        </Grid>
        <Grid item xs={12}>
          {materials && <Materials list={materials} />}
        </Grid>
        <Addresses id={id} supplier={current} {...this.props} />
>>>>>>> 0a64e599791ce0b0ed21652ac1d483bce361b949
      </Grid>
    )
  }
}

export default Info
