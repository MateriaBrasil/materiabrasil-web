import React from 'react'

import { Info } from 'croods'

import render from './info/render'

export default props => routeProps => {
  const { id } = routeProps.match.params

  return (
    <Info id={id} name="topics" render={render({ ...props, ...routeProps })} />
  )
}
