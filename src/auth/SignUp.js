import React from 'react'
import { reduxForm } from 'redux-form'
import { required, email, confirmation } from 'redux-form-validators'

import SingleColumn from '../SingleColumn'
import TextLink from '../TextLink'
import Form from '../form/Form'
import TextField from '../form/TextField'

const SignIn = props => (
  <SingleColumn>
    <Form callToAction="Registre-se">
      <TextField name="name" label="Nome" validate={[required()]} />
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
      <TextField
        name="confirmation"
        label="Confirme a senha"
        type="password"
        validate={confirmation({ field: 'password', fieldLabel: 'Senha' })}
      />
    </Form>
    <TextLink to={'/auth/sign-in'} text="Possui uma conta? Faça login" />
  </SingleColumn>
)

export default reduxForm({ form: 'signUp' })(SignIn)
