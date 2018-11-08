import React from 'react'
import { New } from 'croods'

import renderNew from './renderNew'
import renderCreated from './renderCreated'

export default props => routeProps => (
  <New
    name="addresses"
    render={renderNew({ ...props, ...routeProps })}
    renderCreated={renderCreated({ ...props, ...routeProps })}
  />
)
