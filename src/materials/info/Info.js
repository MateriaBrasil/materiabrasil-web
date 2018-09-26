import React, { Component } from 'react'
import find from 'lodash/find'
import Grid from '@material-ui/core/Grid'

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
    const { id, supplierId } = current
    const { suppliers } = currentUser || {}
    const editable = find(suppliers, supplier => supplier.id === supplierId)

    return (
      <Grid container spacing={16}>
        <CoverImage {...current} editable={editable} />
        {editable && <Images {...this.props} {...current} />}
        <Description {...this.props} {...current} editable={editable} />
        <Sidebar {...this.props} {...current} />
        <Comments id={id} type="materials" {...this.props} />
      </Grid>
    )
  }
}
