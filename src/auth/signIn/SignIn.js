import React from 'react'

import TextLink from '../../TextLink'
import New from '../New'

import Form from './Form'

export default props => (
  <New name="signIn" path="/auth/sign_in" form={Form} {...props}>
    <TextLink to="/auth/sign-up" text="Não possui uma conta? Cadastre-se" />
  </New>
)
