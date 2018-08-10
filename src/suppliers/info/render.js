import React from 'react'

import Info from './Info'

export default props => (info, infoProps) => (
  <Info current={info} {...props} {...infoProps} />
)
