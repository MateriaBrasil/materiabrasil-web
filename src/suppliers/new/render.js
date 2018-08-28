import React from 'react'

import Form from '../form/Form'

export default props => ({ create, creating, error }) => {
  return (
    <Form
      onSubmit={create}
      submitting={creating}
      createError={error}
      buttonText="Registrar fornecedor"
      {...props}
    />
  )
}
