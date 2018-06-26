import React from 'react'
import Destroyed from './Destroyed'
import Link from './Link'

export default props => (destroy, { destroying, destroyed }) => {
  if (destroying) {
    return '...'
  }

  if (destroyed) {
    return <Destroyed {...props} />
  }

  return <Link destroy={destroy} />
}
