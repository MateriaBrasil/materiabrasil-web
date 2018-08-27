import React from 'react'
import { New } from 'croods'

import renderNew from './renderNew'
import renderCreated from './renderCreated'

export default props => (
  <New
    name="addresses"
    render={renderNew(props)}
    renderCreated={renderCreated(props)}
  />
)
