import React, { Fragment } from 'react'

import Ratio from './Ratio'

export default props => {
  const { name, imageUrl, editPath, width = 400, height = 400 } = props
  const { preserveRatio, defaultImageUrl } = props

  const placeholder = `https://via.placeholder.com/${width}x${height}`
  const defaultSrc = defaultImageUrl || placeholder

  const RatioComponent = preserveRatio ? Ratio : Fragment

  return (
    <RatioComponent {...(preserveRatio ? props : {})}>
      <img
        style={{
          width: preserveRatio ? '100%' : width,
          height: 'auto',
          maxWidth: '100%',
          display: 'inline-block',
          marginRight: 16,
          borderRadius: 2,
          backgroundColor: '#ddd',
        }}
        src={imageUrl === '' || !imageUrl ? defaultSrc : imageUrl}
        alt={name}
        title={editPath ? 'Clique para editar' : name}
      />
    </RatioComponent>
  )
}
