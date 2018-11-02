import React from 'react'
import { Edit } from 'croods'

import renderImageUpload from './renderImageUpload'
import renderUpdated from './renderUpdated'

export default props => {
  const { id, name, redirectUrl = '/' } = props

  return (
    <Edit
      id={id}
      name={name}
      render={renderImageUpload({ ...props, redirectUrl })}
      renderUpdated={renderUpdated({ ...props, redirectUrl })}
    />
  )
}
