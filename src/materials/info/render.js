import React from 'react'
import FragmentWithHelmet from '../../FragmentWithHelmet'

import Info from './Info'

export default props => (info, infoProps) => {
  return (
    <FragmentWithHelmet
      title={infoProps.info.name}
      ogImage={infoProps.info.listImageUrl}
    >
      <Info current={info} {...props} {...infoProps} />
    </FragmentWithHelmet>
  )
}
