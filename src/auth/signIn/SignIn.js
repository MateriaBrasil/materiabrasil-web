import React from 'react'

import TextLink from '../../TextLink'
import Auth from '../Auth'

import Form from './Form'

export default props => (
  <Auth name="signIn" path="/auth/sign_in" form={Form} {...props}>
    <TextLink to="/auth/sign-up" text="Não possui uma conta? Cadastre-se" />
  </Auth>
)
