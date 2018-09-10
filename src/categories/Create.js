import React from 'react'

import Checkbox from './Checkbox'
import createWithParams from './createWithParams'

export default ({ create, ...props }) => (
  <Checkbox {...props} action={createWithParams(create, props)} />
)
