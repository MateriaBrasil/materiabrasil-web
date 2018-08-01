import React from 'react'

import Form from './Form'

export default props => ({ create, creating, error }) => {
  return (
    <Form
      onSubmit={create}
      submitting={creating}
      createError={error}
      {...props}
    />
  )
}
