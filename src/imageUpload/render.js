import React from 'react'
import { Edit } from 'croods'

import renderImageUpload from './renderImageUpload'
import renderUpdated from './renderUpdated'

export default props => routeProps => {
  const { id, name, redirectUrl = '/' } = props

  return (
    <Edit
      id={id}
      name={name}
      render={renderImageUpload({
        ...props,
        ...routeProps,
        redirectUrl,
        title: 'Arraste uma imagem ou clique para escolher o arquivo.',
      })}
      renderUpdated={renderUpdated(redirectUrl)}
    />
  )
}
