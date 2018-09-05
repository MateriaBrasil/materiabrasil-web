import React from 'react'

import Dialog from 'materials/Dialog'
import Form from './Form'
import createWithParams from './createWithParams'

export default props => {
  const { create, creating, error, match } = props
  const { id } = match.params

  return (
    <Dialog {...props} title="Avaliar">
      <Form
        id={id}
        onSubmit={createWithParams(create, id)}
        submitting={creating}
        createError={error}
      />
    </Dialog>
  )
}
