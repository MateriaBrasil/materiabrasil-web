import React, { Component, Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import { Helmet } from 'react-helmet'
import checkReloadAndFetch from '../../checkReloadAndFetch'
import Addresses from '../../addresses/Addresses'
import InfoCard from './InfoCard'
import Profile from './Profile'
import Materials from './Materials'

class Info extends Component {
  componentDidUpdate(prevProps) {
    checkReloadAndFetch(this.props)
  }

  render() {
    const { current } = this.props
    const { id, name, imageUrl } = current

    return (
      <Fragment>
        <Helmet>
          <title>{name}</title>
          <meta property="og:image" content={imageUrl} />
        </Helmet>
        <Grid container spacing={32}>
          <Profile {...this.props} />
          <InfoCard {...this.props} />
          <Materials {...this.props} />
          <Addresses id={id} supplier={current} {...this.props} />
        </Grid>
      </Fragment>
    )
  }
}

export default Info
