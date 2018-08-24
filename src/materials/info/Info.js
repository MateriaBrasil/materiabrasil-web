import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import queryString from 'query-string'
import Link from 'react-router-dom/Link'
import Comments from '../../comments/Comments'

import CoverImage from './CoverImage'
import Description from './Description'
import Supplier from './Supplier'

export default class extends Component {
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
    const { current } = this.props
    const { id } = current

    return (
      <Grid container spacing={16}>
        <CoverImage {...current} />
        <Description {...this.props} {...current} />
        <Supplier {...this.props} {...current} />
        <Comments id={id} type="materials" {...this.props} />
      </Grid>
    )
  }
}
