import React from 'react'

import Form from './Form'
import createWithParams from './createWithParams'

export default props => ({ create, creating, error }) => {
  const { current } = props

  return (
    <Form
      onSubmit={createWithParams(create, current.id)}
      submitting={creating}
      createError={error}
      {...props}
    />
  )
}
