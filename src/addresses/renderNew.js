import React from 'react'

import Form from './Form'
import createWithParams from './createWithParams'

export default props => ({ create, creating, error }) => {
  const { id } = props.match.params

  return (
    <Form
      {...props}
      onSubmit={createWithParams(create, id)}
      creating={creating}
      createError={error}
    />
  )
}
