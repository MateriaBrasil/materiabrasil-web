import React from 'react'
import { New } from 'croods'

import parseCreateResponse from '../parseCreateResponse'
import renderCreated from '../renderCreated'

import Form from './Form'

export default props => (
  <New
    name="signUp"
    path="/auth"
    parseCreateResponse={parseCreateResponse}
    render={({ create, creating, error }) => (
      <Form
        onSubmit={create}
        submitting={creating}
        createError={error}
        {...props}
        linkTo="/auth/sign-in"
        linkText="Possui uma conta? Faça login"
      />
    )}
    renderCreated={renderCreated(props)}
  />
)
