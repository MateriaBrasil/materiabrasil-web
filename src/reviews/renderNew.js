import React from 'react'
import { New } from 'croods'

import reload from '../materials/reload'
import renderNew from './new/render'

export default props => routeProps => (
  <New
    name="reviews"
    render={renderNew({ ...props, ...routeProps })}
    renderCreated={reload({ ...routeProps })}
  />
)
