import React from 'react'

import { New } from 'croods'
import renderForm from './renderForm'
import renderCreated from './renderCreated'

export const passCorrectParams = renderForm => ({ create, creating, error }) =>
  renderForm({ create, creating, apiError: error })

export default props => {
  return (
    <New
      name="password"
      path="/auth/password"
      render={passCorrectParams(renderForm)}
      renderCreated={renderCreated(props)}
    />
  )
}
