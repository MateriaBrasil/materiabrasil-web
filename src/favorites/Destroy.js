import React from 'react'
import { Destroy } from 'croods'

import renderDestroy from './renderDestroy'

export default props => {
  const { id, parentId } = props
  return <Destroy parentId={parentId} id={id} name="favorites" render={renderDestroy(props)} />
}
