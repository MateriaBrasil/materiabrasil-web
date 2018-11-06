import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'

import TextLink from '../../TextLink'
import New from '../New'

import Form from './Form'

export default props => {
  const { location } = props
  const { state } = location

  return (
    <Fragment>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <New name="signIn" path="/auth/sign_in" form={Form} {...props}>
        <TextLink
          to={{ pathname: '/auth/sign-up', state }}
          text="Não possui uma conta? Cadastre-se"
        />
        <TextLink
          to={{ pathname: '/auth/forgot-password', state }}
          text="Esqueceu sua senha? Clique aqui"
        />
      </New>
    </Fragment>
  )
}
