import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import Comments from '../../comments/Comments'
import Favorites from '../../favorites/New'

import Card from './Card'
import Description from './Description'

export default class extends Component {
  componentDidUpdate(prevProps) {
    const { location, actions, current } = this.props
    const { id } = current
    const { location: oldLocation } = prevProps
    const { pathname } = location
    const { pathname: oldPathName } = oldLocation

    if (pathname !== oldPathName && oldPathName === `/${id}/reviews/new`) {
      const { fetchInfo } = actions
      fetchInfo(id)
    }
  }

  render() {
    const { current, currentUser } = this.props
    const { id, name } = current

    return (
      <Grid container spacing={24}>
        <Grid item xs={12} style={{ display: 'flex' }}>
          <Typography variant="display1" style={{ flex: 1 }}>
            {name}
          </Typography>
          <Favorites {...current} />
        </Grid>
        <Card {...current} />
        <Description {...current} currentUser={currentUser} />
        <Comments id={id} type="materials" {...this.props} />
      </Grid>
    )
  }
}
