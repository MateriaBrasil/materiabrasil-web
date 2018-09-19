import React from 'react'
import { New } from 'croods'

import renderNew from './new/render'
import renderCreated from './new/renderCreated'

export default props => routeProps => (
  <New
    name="topics"
    render={renderNew({ ...props, ...routeProps })}
    renderCreated={renderCreated(routeProps)}
  />
)
