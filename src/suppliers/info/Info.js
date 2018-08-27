import React, { Component } from 'react'
import Link from 'react-router-dom/Link'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import checkReloadAndFetch from '../../checkReloadAndFetch'
import Avatar from '../../imageUpload/Avatar'
import Addresses from '../../addresses/Addresses'

import InfoCard from './InfoCard'
import Materials from './Materials'

class Info extends Component {
  componentDidUpdate(prevProps) {
    checkReloadAndFetch(this.props)
  }
  render() {
    const { current, currentUser } = this.props
    const { userId, materials, id, name, imageUrl } = current
    const editPath =
      currentUser && userId === currentUser.id && `/suppliers/${id}/avatar`
    const editProfile =
      currentUser && currentUser.id.toString() === userId.toString()

    return (
      <Grid container spacing={32}>
        <Grid item xs={12} lg={4}>
          <Avatar name={name} editPath={editPath} imageUrl={imageUrl} />
          <Typography
            variant="display1"
            style={{ marginTop: 16, marginBottom: 16 }}
          >
            {name}
          </Typography>
          {editProfile ? (
            <Link to={`/suppliers/${id}/edit`}>
              <Typography variant="subheading">Editar perfil</Typography>
            </Link>
          ) : null}
        </Grid>
        <Grid item xs={12} lg={8}>
          <InfoCard {...this.props} />
        </Grid>
        <Grid item xs={12}>
          {materials && <Materials list={materials} />}
        </Grid>
        <Addresses id={id} supplier={current} {...this.props} />
      </Grid>
    )
  }
}

export default Info
