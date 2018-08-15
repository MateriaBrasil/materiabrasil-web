import React, { Component, Fragment } from 'react'
import Link from 'react-router-dom/Link'
import Grid from '@material-ui/core/Grid'
import Ratio from 'react-ratio'

import NewFavorite from '../../favorites/New'
import TechnicalSpecification from './TechnicalSpecification'
import TitleBar from './TitleBar'

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
      <Grid item xs={12} md={9} style={{ marginTop: -40 }}>
        <Grid container spacing={8}>
          {list.map((material, index) => {
            const { id, highlighted, name, imageUrl } = material
            const { highlightImageUrl, listImageUrl } = material
            const image = highlighted ? highlightImageUrl : listImageUrl

            const cols = ignoreHighlights ? 1 : highlighted ? 2 : 1

            return (
              <Grid key={id} item xs={6 * cols}>
                <Ratio
                  key={id}
                  ratio={9 * cols / 5}
                  style={{ overflow: 'hidden ' }}
                >
                  <Link to={`/${id}`}>
                    <img
                      src={image || imageUrl}
                      alt={name}
                      style={{ width: '100%' }}
                    />
                  </Link>
                  <TitleBar
                    {...this.props}
                    material={material}
                    renderIcons={() => (
                      <Fragment>
                        {currentUser && (
                          <NewFavorite id={id} style={{ color: 'white' }} />
                        )}
                        <TechnicalSpecification
                          {...material}
                          style={{ color: 'white', marginRight: 16 }}
                        />
                      </Fragment>
                    )}
                  />
                </Ratio>
              </Grid>
            )
          })}
        </Grid>
      </Grid>
    )
  }
}
