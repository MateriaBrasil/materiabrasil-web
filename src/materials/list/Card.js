import React, { Component, Fragment } from 'react'
import Link from 'react-router-dom/Link'
import Grid from '@material-ui/core/Grid'
import Ratio from 'react-ratio'

import NewFavorite from '../../favorites/New'
import TechnicalSpecification from './TechnicalSpecification'
import TitleBar from './TitleBar'

export default props => {
  const {material} = props
  const { id, highlighted, name, imageUrl } = material
  const { highlightImageUrl, listImageUrl } = material
  const {currentUser, ignoreHighlights } = props
  const image = highlighted ? highlightImageUrl : listImageUrl

  const cols = ignoreHighlights ? 1 : highlighted ? 2 : 1
  return (
    <Grid key={id} item xs={6 * cols}>
      <Ratio key={id} ratio={9 * cols / 6} style={{ overflow: 'hidden ' }}>
        <Link to={`/${id}`}>
          <img src={image || imageUrl} alt={name} style={{ width: '100%' }} />
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
}
