import React from 'react'

import { Edit } from 'croods'

import renderImageUpload from '../imageUpload/render'

export default props => routeProps => {
  const { id } = routeProps.match.params
  const name = 'suppliers'
  const redirectUrl = `/suppliers/${id}`

  return (
    <Edit
      id={id}
      name={name}
      render={renderImageUpload({ ...props, ...routeProps, id, name, redirectUrl })}
    />
  )
}
