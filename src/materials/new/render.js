import React from 'react'

import Form from '../form/Form'
import createWithParams from './createWithParams'

export default props => ({ create, creating, error }) => {
  const { match } = props
  const { id } = match.params

  return (
    <Form
      onSubmit={createWithParams(create, id)}
      submitting={creating}
      createError={error}
      buttonText="Cadastrar material"
      {...props}
    />
  )
}
