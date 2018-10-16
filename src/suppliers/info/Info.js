import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import checkReloadAndFetch from '../../checkReloadAndFetch'
import Avatar from '../../imageUpload/Avatar'
import Addresses from '../../addresses/Addresses'

import EditProfile from './EditProfile'
import InfoCard from './InfoCard'
import Materials from './Materials'
import AnswerQuestionnaire from './AnswerQuestionnaire'

class Info extends Component {
  componentDidUpdate(prevProps) {
    checkReloadAndFetch(this.props)
  }

  render() {
    const { current, currentUser } = this.props
    const { userId, id, name, imageUrl } = current
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
          <EditProfile currentUser={currentUser} supplier={current} />
          <AnswerQuestionnaire id={id} />
        </Grid>
        <InfoCard {...this.props} />
        <Materials {...this.props} />
        <Addresses id={id} supplier={current} {...this.props} />
      </Grid>
    )
  }
}

export default Info
