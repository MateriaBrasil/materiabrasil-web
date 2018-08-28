import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'

import renderIcons from './renderIcons'
import Card from './Card'
import './List.css'

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
    const { list, currentUser } = this.props
    return (
      <Grid item xs={12} lg={9} className="materials-list-grid">
        <Grid container spacing={8}>
          {list.map(material => {
            const { id } = material
            return (
              <Card
                key={id}
                material={material}
                renderIcons={renderIcons({ currentUser, id, material })}
                {...this.props}
              />
            )
          })}
        </Grid>
      </Grid>
    )
  }
}
