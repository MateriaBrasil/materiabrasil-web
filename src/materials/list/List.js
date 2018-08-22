import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Card from './Card'

export default class extends Component {
  componentDidUpdate(prevProps) {
    const { location, listProps } = this.props
    const { location: prevLocation } = prevProps

    if (listProps && location.search !== prevLocation.search) {
      const { actions } = listProps
      actions.fetchList()
    }
  }

  render() {
    const { list } = this.props

    return (
      <Grid item xs={12} md={9} style={{ marginTop: -40 }}>
        <Grid container spacing={8}>
          {list.map(material => <Card material={material} {...this.props} />)}
        </Grid>
      </Grid>
    )
  }
}
