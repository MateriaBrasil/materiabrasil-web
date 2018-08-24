import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import queryString from 'query-string'

import InfoCard from './InfoCard'
import Avatar from '../../imageUpload/Avatar'
import Addresses from '../../addresses/Addresses'
import Materials from './Materials'

class Info extends Component {
  componentDidUpdate(prevProps) {
    const { location, actions, current } = this.props
    const { id } = current
    const { search } = location
    const query = queryString.parse(search)
    const { reload } = query

    if (reload) {
      const { fetchInfo } = actions
      fetchInfo(id)
    }
  }
  render() {
    const { current, currentUser } = this.props
    const { userId, materials } = current
    const { id, name, imageUrl } = current
    const editPath =
      currentUser && userId === currentUser.id && `/suppliers/${id}/avatar`

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
