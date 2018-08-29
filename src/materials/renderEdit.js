import React from 'react'
import { Edit } from 'croods'

import render from './edit/render'
import reload from './reload'

export default props => routeProps => {
  const { match } = routeProps
  const { id } = match.params

  return (
    <Edit
      id={id}
      name="materials"
      render={render({ ...props, ...routeProps })}
      renderUpdated={reload({ ...routeProps })}
    />
  )
}
