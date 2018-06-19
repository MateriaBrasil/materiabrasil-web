import React from 'react'
import { reduxForm } from 'redux-form'
import { required, email } from 'redux-form-validators'

import SingleColumn from '../SingleColumn'
import TextLink from '../TextLink'
import Form from '../form/Form'
import TextField from '../form/TextField'

const SignIn = props => (
  <SingleColumn>
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
    <TextLink to={'/auth/sign-up'} text="Não possui uma conta? Registre-se" />
  </SingleColumn>
)

export default reduxForm({ form: 'signIn' })(SignIn)
