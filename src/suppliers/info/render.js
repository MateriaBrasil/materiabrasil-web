import React from 'react'
import Helmet from '../../Helmet'

import Info from './Info'

export default props => (info, infoProps) => {
  return (
    <Helmet
      title={infoProps.info.name}
      ogImage={infoProps.info.imageUrl}
    >
      <Info current={info} {...props} {...infoProps} />
    </Helmet>
  )
}
