import React from 'react'

import createWithParams from './createWithParams'
import Button from './Button'

export default ({ id, ...props }) => ({ create, creating }) => (
  <Button
    onClick={createWithParams(create, id)}
    creating={creating}
    {...props}
  />
)
