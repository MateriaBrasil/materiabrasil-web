import React from 'react'

import SingleColumn from '../../SingleColumn'
import TextLink from '../../TextLink'

import Form from './Form'

export default props => (
  <SingleColumn>
    <Form {...props} />
    <TextLink to={'/auth/sign-up'} text="Não possui uma conta? Registre-se" />
  </SingleColumn>
)
