import React from 'react'
import { New } from 'croods'

import renderNew from './renderNew'

export default props => (
  <New parentId={props.id} name="favorites" render={renderNew(props)} />
)
