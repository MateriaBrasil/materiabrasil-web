import React from 'react'

import Info from './Info'

export default props => (info, infoProps) => (
  <Info supplier={info} {...props} {...infoProps} />
)
