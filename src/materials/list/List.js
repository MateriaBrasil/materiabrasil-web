import React, { Component } from 'react'
import Link from 'react-router-dom/Link'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import Children from '../../Children'
import TitleBar from './TitleBar'
import NewFavorite from '../../favorites/New'
import TechnicalSpecification from './TechnicalSpecification'

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
    const { list, currentUser, ignoreHighlights } = this.props

    return (
      <Grid item xs={12} md={9}>
        <GridList cellHeight={360}>
          {list.map((material, index) => {
            const { id, highlighted, name, imageUrl } = material
            const cols = ignoreHighlights ? 1 : highlighted ? 2 : 1
            const actionIcon = currentUser ? (
              <Children>
                <NewFavorite id={id} type="icon" style={{ color: 'white' }} />
                <TechnicalSpecification
                  {...material}
                  style={{ color: 'white', marginRight: 16 }}
                />
              </Children>
            ) : (
              <TechnicalSpecification
                {...material}
                style={{ color: 'white', marginRight: 16 }}
              />
            )

            return (
              <GridListTile key={id} cols={cols}>
                <Link to={`/${id}`}>
                  <img
                    src={imageUrl}
                    alt={name}
                    style={{ width: '100%', objectFit: 'cover', height: 360 }}
                  />
                </Link>
                <TitleBar material={material} actionIcon={actionIcon} />
              </GridListTile>
            )
          })}
        </GridList>
      </Grid>
    )
  }
}
