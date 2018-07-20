import React from 'react'

import TextLink from '../../TextLink'
import New from '../New'

import Form from './Form'

export default props => {
  const { location } = props
  const { state } = location

  return (
    <New name="signIn" path="/auth/sign_in" form={Form} {...props}>
      <TextLink
        to={{ pathname: '/auth/sign-up', state }}
        text="Não possui uma conta? Cadastre-se"
      />
    </New>
  )
}
