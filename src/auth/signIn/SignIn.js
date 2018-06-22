import React from 'react'
import { New } from 'croods'

import parseCreateResponse from '../parseCreateResponse'
import renderCreated from '../renderCreated'

import Form from './Form'

export default props => (
  <New
    name="signIn"
    path="/auth/sign_in"
    parseCreateResponse={parseCreateResponse}
    render={({ create, creating, error }) => (
      <Form
        onSubmit={create}
        submitting={creating}
        createError={error}
        {...props}
        linkTo="/auth/sign-up"
        linkText="Não possui uma conta? Registre-se"
      />
    )}
    renderCreated={renderCreated(props)}
  />
)
