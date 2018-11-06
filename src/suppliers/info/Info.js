import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import { Helmet } from 'react-helmet'

import checkReloadAndFetch from '../../checkReloadAndFetch'
import Avatar from '../../imageUpload/Avatar'
import Addresses from '../../addresses/Addresses'

import Name from './Name'
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
      <Fragment>
        <Helmet>
          <title>{name}</title>
          <meta name="og:image" content={imageUrl} />
        </Helmet>
        <Grid container spacing={32}>
          <Grid item xs={12} sm={4} md={4} lg={3} xl={2}>
            <Avatar name={name} editPath={editPath} imageUrl={imageUrl} />
            <Name text={name} />
            <EditProfile currentUser={currentUser} supplier={current} />
            <AnswerQuestionnaire id={id} />
          </Grid>
          <InfoCard {...this.props} />
          <Materials {...this.props} />
          <Addresses id={id} supplier={current} {...this.props} />
        </Grid>
      </Fragment>
    )
  }
}

export default Info
