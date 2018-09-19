import React from 'react'

import Form from './Form'

export default props => {
  const { create, creating, error, match } = props
  const { id } = match.params

  return (
    <Form
      {...props}
      id={id}
      onSubmit={create}
      submitting={creating}
      createError={error}
    />
  )
}
