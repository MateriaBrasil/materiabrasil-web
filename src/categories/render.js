import React from 'react'

import Categories from './Categories'

export default props => routeProps => {
  return <Categories {...props} {...routeProps} />
}
