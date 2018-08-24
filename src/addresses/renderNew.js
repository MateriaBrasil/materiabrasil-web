import React from 'react'

import Form from './Form'
import createWithParams from './createWithParams'
import Card from './Card'

export default props => ({ create, creating, error }) => {
  const { id } = props

  return (
    <Card title="Adicionar endereço">
      <Form
        {...props}
        onSubmit={createWithParams(create, id)}
        creating={creating}
        createError={error}
      />
    </Card>
  )
}
