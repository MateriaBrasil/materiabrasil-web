import React from 'react'

import Form from './Form'
import createWithParams from './createWithParams'

export default props => ({ create, creating, error }) => (
  <Form
    onSubmit={createWithParams(create, props)}
    submitting={creating}
    createError={error}
    {...props}
  />
)
