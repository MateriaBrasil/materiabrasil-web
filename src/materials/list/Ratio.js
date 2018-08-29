import React from 'react'
import Link from 'react-router-dom/Link'
import Ratio from 'react-ratio'

import TitleBar from './TitleBar'

export default props => {
  const { material, renderIcons, ratio, imageUrl } = props
  const { id, name } = material

  return (
    <Ratio ratio={ratio} style={{ overflow: 'hidden' }}>
      <Link to={`/${id}`}>
        <img src={imageUrl} alt={name} style={{ width: '100%' }} />
      </Link>
      <TitleBar {...props} material={material} renderIcons={renderIcons} />
    </Ratio>
  )
}
