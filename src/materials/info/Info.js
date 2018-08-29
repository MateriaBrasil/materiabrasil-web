import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import find from 'lodash/find'

import Comments from '../../comments/Comments'

import checkReloadAndFetch from '../../checkReloadAndFetch'
import CoverImage from './CoverImage'
import Description from './Description'
import Supplier from './Supplier'

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
        <Description {...this.props} {...current} editable={editable} />
        <Supplier {...this.props} {...current} />
        <Comments id={id} type="materials" {...this.props} />
      </Grid>
    )
  }
}
