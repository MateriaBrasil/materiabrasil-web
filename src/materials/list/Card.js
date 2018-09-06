import React from 'react'
import Grid from '@material-ui/core/Grid'
import Media from 'react-media'

import Ratio from './Ratio'

export default props => {
  const { material } = props
  const { id, highlighted, highlightImageUrl, listImageUrl } = material
  const { ignoreHighlights } = props
  const cols = ignoreHighlights ? 1 : highlighted ? 2 : 1
  const imageUrl = highlighted ? highlightImageUrl : listImageUrl

  return (
    <Grid key={id} item xs={12} lg={6 * cols}>
      <Media query="(min-width: 1280px)">
        {matches =>
          matches ? (
            <Ratio {...props} ratio={9 * cols / 6} imageUrl={imageUrl} />
          ) : (
            <Ratio {...props} ratio={9 / 6} imageUrl={listImageUrl} />
          )
        }
      </Media>
    </Grid>
  )
}
