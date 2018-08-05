import React from 'react'
import Link from 'react-router-dom/Link'

import Image from './Image'

export default props => {
  const { editable } = props

  if (!editable) {
    return <Image {...props} />
  }

  return (
    <Link to="/profile/avatar">
      <Image {...props} />
    </Link>
  )
}
