import React from 'react'

import TextLink from '../../TextLink'
import New from '../New'

import Form from './Form'

export default props => {
  const { location } = props
  const { state } = location

  return (
    <New name="signUp" path="/auth" form={Form} {...props}>
      <TextLink
        to={{ pathname: '/auth/sign-in', state }}
        text="Já possui cadastro? Clique aqui para entrar"
      />
    </New>
  )
}
