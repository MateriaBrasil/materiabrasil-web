import React from 'react'
import { Edit } from 'croods'
import Redirect from 'react-router-dom/Redirect'

import render from './edit/render'

export default props => routeProps => {
  const id = props.id

  return (
    <Edit
      id={id}
      name="users"
      render={render({ ...props, ...routeProps })}
      renderUpdated={() => <Redirect to="/profile" />}
    />
  )
}
