import React from 'react'

import Form from './Form'
import createWithParams from './createWithParams'

export default props => ({ create, creating, error }) => {
  const { id } = props

  return (
    <Form
      onSubmit={createWithParams(create, id)}
      submitting={creating}
      createError={error}
      {...props}
    />
  )
}
