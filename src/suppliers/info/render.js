import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import Info from './Info'

export default props => (info, infoProps) => {
  return (
    <Fragment>
      <Helmet>
        <title>{infoProps.info.name}</title>
        <meta name="og:image" content={infoProps.info.imageUrl} />
      </Helmet>
      <Info current={info} {...props} {...infoProps} />
    </Fragment>
  )
}
