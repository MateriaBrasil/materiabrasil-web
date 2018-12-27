import React from 'react'

import createWithParams from './createWithParams'
import Button from './Button'

export default ({ materialId, albumId, ...props }) => ({ create }) => (
  <Button onClick={createWithParams(create, materialId, albumId)} {...props} />
)
