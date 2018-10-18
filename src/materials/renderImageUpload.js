import React from 'react'

import { Edit } from 'croods'

import renderImageUpload from '../imageUpload/renderImageUpload'
import renderUpdated from '../imageUpload/renderUpdated'

export default props => routeProps => {
  const { id } = routeProps.match.params
  const name = 'materials'
  const redirectUrl = `/materials/${id}`

  return (
    <Edit
      id={id}
      name={name}
      render={renderImageUpload({
        ...props,
        ...routeProps,
        id,
        name,
        redirectUrl,
      })}
      renderUpdated={renderUpdated(redirectUrl)}
    />
  )
}
