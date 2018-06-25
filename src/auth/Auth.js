import React from 'react'
import { New } from 'croods'

import parseCreateResponse from './parseCreateResponse'
import renderCreated from './renderCreated'

export default ({ name, path, form: Form, ...props }) => (
  <New
    name={name}
    path={path}
    parseCreateResponse={parseCreateResponse}
    render={({ create, creating, error }) => (
      <Form
        onSubmit={create}
        submitting={creating}
        createError={error}
        {...props}
      />
    )}
    renderCreated={renderCreated(props)}
  />
)
