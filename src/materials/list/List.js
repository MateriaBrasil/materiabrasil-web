import React, { Component } from 'react'
import isEmpty from 'lodash/isEmpty'
import Grid from '@material-ui/core/Grid'

import Error from 'Error'
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

    if (isEmpty(list)) {
      return <Error color="default">Nenhum material encontrado.</Error>
    }

    return (
      <Grid item xs={12} md={9} className="materials-list-grid">
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
