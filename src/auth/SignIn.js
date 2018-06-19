import React from 'react'
import { reduxForm } from 'redux-form'
import { required, email } from 'redux-form-validators'

import Form from '../form/Form'
import TextField from '../form/TextField'

const SignIn = props => (
  <Form callToAction="Login">
    <TextField
      name="email"
      label="E-mail"
      type="email"
      validate={[required(), email()]}
    />
    <TextField
      name="password"
      label="Senha"
      type="password"
      validate={[required()]}
    />
  </Form>
)

export default reduxForm({ form: 'signIn' })(SignIn)
