import React from 'react'

import TextLink from '../../TextLink'
import Auth from '../Auth'

import Form from './Form'

export default props => (
  <Auth name="signUp" path="/auth" form={Form} {...props}>
    <TextLink
      to="/auth/sign-in"
      text="Já possui cadastro? Clique aqui para entrar"
    />
  </Auth>
)
