import React from 'react'

import { Info } from 'croods'

import renderInfo from './renderInfo'

export default props => routeProps => {
  const { id } = routeProps.match.params

  return (
    <Info
      id={id}
      name="material"
      path={`/materials/${id}`}
      render={renderInfo({ ...props, ...routeProps })}
    />
  )
}
