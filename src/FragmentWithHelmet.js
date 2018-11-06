import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

export default props => {
  return (
    <Fragment>
      <Helmet>
        <title>{props.title}</title>
        {props.ogImage && <meta name="og:image" content={props.ogImage} />}
      </Helmet>
      {props.children}
    </Fragment>
  )
}
