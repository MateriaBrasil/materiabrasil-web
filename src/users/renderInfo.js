import React from 'react'
import { Info } from 'croods'

import render from './info/render'

export default props => routeProps => {
  const id = props.id || routeProps.match.params.id

  return id ? (
    <Info
      id={id}
      name="users"
      disableCache={true}
      render={render({ ...props, ...routeProps })}
    />
  ) : null
}
