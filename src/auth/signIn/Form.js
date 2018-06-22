import React from 'react'
import { reduxForm } from 'redux-form'
import { required, email } from 'redux-form-validators'

import DefaultForm from '../../form/Form'
import TextField from '../../form/TextField'

const Form = props => (
  <DefaultForm callToAction="Login">
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
  </DefaultForm>
)

export default reduxForm({ form: 'signIn' })(Form)
