import React from 'react'

import TextLink from '../../TextLink'
import New from '../New'

import Form from './Form'

export default props => (
  <New name="signUp" path="/auth" form={Form} {...props}>
    <TextLink
      to="/auth/sign-in"
      text="Já possui cadastro? Clique aqui para entrar"
    />
  </New>
)
