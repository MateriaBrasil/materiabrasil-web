import React from 'react'
import { Destroy } from 'croods'

import renderDestroy from './renderDestroy'

export default props => {
  const { id } = props
  return <Destroy id={id} name="favorites" render={renderDestroy(props)} />
}
