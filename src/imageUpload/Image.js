import React, { Fragment } from 'react'

import Ratio from './Ratio'

export default props => {
  const { name, imageUrl, editPath, width = 400, height = 400 } = props
  const { preserveRatio = false } = props

  const RatioComponent = preserveRatio ? Ratio : Fragment

  return (
    <RatioComponent {...(preserveRatio ? props : {})}>
      <img
        style={{
          width,
          height: preserveRatio ? height : 'auto',
          maxWidth: '100%',
          objectFit: 'cover',
          display: 'inline-block',
          marginRight: 16,
          borderRadius: 2,
          backgroundColor: '#ddd',
        }}
        src={imageUrl === '' || !imageUrl ? '/images/avatar.png' : imageUrl}
        alt={name}
        title={editPath ? 'Clique para editar' : name}
      />
    </RatioComponent>
  )
}
