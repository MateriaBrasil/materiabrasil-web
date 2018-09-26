import React, { Component } from 'react'
import find from 'lodash/find'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Icon from '@material-ui/core/Icon'

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
    const { current, currentUser, comparison } = this.props
    const { id, supplierId } = current
    const { suppliers } = currentUser || {}
    const editable = find(suppliers, supplier => supplier.id === supplierId)

    return (
      <Grid container spacing={16}>
        <CoverImage {...current} editable={editable} />
        {editable && <Images {...this.props} {...current} />}
        <Description {...this.props} {...current} editable={editable} />
        <Sidebar {...this.props} {...current} />
        {currentUser && (
          <Button
            color="primary"
            onClick={() => comparison.actions.add(current)}
          >
            <Icon style={{ marginRight: 10 }}>add_circle</Icon> Comparar
          </Button>
        )}
        <Comments id={id} type="materials" {...this.props} />
      </Grid>
    )
  }
}
