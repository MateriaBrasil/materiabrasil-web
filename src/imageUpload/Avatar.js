import React from 'react'
import Link from 'react-router-dom/Link'

import Image from './Image'

export default props =>
  props.editPath ? (
    <Link to={props.editPath}>
      <Image {...props} />
    </Link>
  ) : (
    <Image {...props} />
  )
