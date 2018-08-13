import React from 'react'

import { Edit } from 'croods'

import renderEdit from './edit/render'

export default props => routeProps => {
  const { id } = routeProps.match.params

  return (
    <Edit
      id={id}
      name="suppliers"
      render={renderEdit({ ...props, ...routeProps })}
    />
  )
}
