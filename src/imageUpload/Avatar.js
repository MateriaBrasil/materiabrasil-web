import React from 'react'
import Link from 'react-router-dom/Link'

import Image from './Image'

export default props =>
  props.editable ? (
    <Link to={props.editable}>
      <Image {...props} />
    </Link>
  ) : (
    <Image {...props} />
  )
