import React, { Component, Fragment } from 'react'
import find from 'lodash/find'
import Grid from '@material-ui/core/Grid'
import { Helmet } from 'react-helmet'

import Comments from '../../comments/Comments'

import checkReloadAndFetch from '../../checkReloadAndFetch'
import CoverImage from './CoverImage'
import Description from './Description'
import Sidebar from './Sidebar'
import Images from './Images'

export default class extends Component {
  componentDidUpdate(prevProps) {
    checkReloadAndFetch(this.props)
  }

  render() {
    const { current, currentUser } = this.props
    const { id, supplierId, name, listImageUrl } = current
    const { suppliers } = currentUser || {}
    const editable = find(suppliers, supplier => supplier.id === supplierId)
    document.documentElement.scrollTop = 0

    return (
      <Fragment>
        <Helmet>
          <title>{name}</title>
          <meta property="og:image" content={listImageUrl} />
        </Helmet>
        <Grid container spacing={16}>
          <CoverImage {...current} editable={editable} />
          {editable && <Images {...this.props} {...current} />}
          <Grid item xs={12} lg={7} style={{ marginBottom: 16 }}>
            <Description {...this.props} {...current} editable={editable} />
            <Comments id={id} type="materials" {...this.props} />
          </Grid>
          <Sidebar {...this.props} {...current} />
        </Grid>
      </Fragment>
    )
  }
}
