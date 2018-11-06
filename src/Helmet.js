import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

export default ({ title, ogImage, children }) => {
  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
        {ogImage && <meta name="og:image" content={ogImage} />}
      </Helmet>
      {children}
    </Fragment>
  )
}
