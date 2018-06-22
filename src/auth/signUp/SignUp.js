import React from 'react'
import { New } from 'croods'

import SingleColumn from '../../SingleColumn'
import TextLink from '../../TextLink'

import Form from './Form'
import renderCreated from './renderCreated'

export default props => (
  <SingleColumn>
    <New
      name="auth"
      render={({ create, creating, error }) => (
        <Form
          onSubmit={create}
          submitting={creating}
          createError={error}
          {...props}
        />
      )}
      renderCreated={renderCreated}
    />
    <TextLink to={'/auth/sign-in'} text="Possui uma conta? Faça login" />
  </SingleColumn>
)
