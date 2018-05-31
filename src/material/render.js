import React from 'react'
import Material from './Material'
import Info from './Info'

export default props => routeProps => (
  <Material
    {...routeProps}
    render={materialProps => (
      <Info {...props} {...routeProps} {...materialProps} />
    )}
  />
)
