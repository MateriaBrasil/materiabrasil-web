import React from 'react'
import Link from 'react-router-dom/Link'
import Grid from '@material-ui/core/Grid'
import Ratio from 'react-ratio'

import TitleBar from './TitleBar'

export default props => {
  const { material, renderIcons } = props
  const { id, highlighted, name, imageUrl } = material
  const { highlightImageUrl, listImageUrl } = material
  const { ignoreHighlights } = props
  const image = highlighted ? highlightImageUrl : listImageUrl

  const cols = ignoreHighlights ? 1 : highlighted ? 2 : 1
  return (
    <Grid key={id} item xs={6 * cols}>
      <Ratio key={id} ratio={9 * cols / 6} style={{ overflow: 'hidden ' }}>
        <Link to={`/${id}`}>
          <img src={image || imageUrl} alt={name} style={{ width: '100%' }} />
        </Link>
        <TitleBar {...props} material={material} renderIcons={renderIcons} />
      </Ratio>
    </Grid>
  )
}
