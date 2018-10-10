import React from 'react'

import { New } from 'croods'
import renderForm from './renderForm'
import renderCreated from './renderCreated'

export default props => {
  return (
    <New
      name="password"
      path="/auth/password"
      render={renderForm}
      renderCreated={renderCreated(props)}
    />
  )
}
