import React from 'react'

import Destroy from './Destroy'

export default ({ showDestroy, parentId, id, destroying }) => () =>
  showDestroy && <Destroy parentId={parentId} id={id} destroying={destroying} />
