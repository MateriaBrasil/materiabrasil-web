import React from 'react'
import { Edit } from 'croods'

import render from './edit/render'
import renderUpdated from './edit/renderUpdated'

export default props => routeProps => {
  const { match } = routeProps
  const { id } = match.params

  return (
    <Edit
      id={id}
      name="materials"
      render={render({ ...props, ...routeProps })}
      renderUpdated={renderUpdated({ ...props, ...routeProps })}
    />
  )
}
