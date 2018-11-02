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
      })}
      renderUpdated={renderUpdated({ ...props, ...routeProps, redirectUrl })}
    />
  )
}
