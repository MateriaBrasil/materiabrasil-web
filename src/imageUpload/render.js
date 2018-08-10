import React from 'react'
import { Edit } from 'croods'

import renderImageUpload from './renderImageUpload'
import renderUpdated from './renderUpdated'

export default props => routeProps => {
  const id = props.id

  return (
    <Edit
      id={id}
      name="users"
      render={renderImageUpload({
        ...props,
        ...routeProps,
        title: 'Arraste uma imagem ou clique para escolher o arquivo.',
      })}
      renderUpdated={renderUpdated}
    />
  )
}
