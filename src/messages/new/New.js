import React from 'react'

import Form from './Form'
import createWithParams from './createWithParams'

export default props => {
  const { create, creating, error, match } = props
  const { id } = match.params

  return (
    <Form
      {...props}
      id={id}
      toType={props.toType}
      onSubmit={createWithParams(create, id)}
      submitting={creating}
      createError={error}
    />
  )
}
