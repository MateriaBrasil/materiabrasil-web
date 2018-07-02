import React from 'react'
import { New } from 'croods'

import Form from './Form'

const createWithParams = (create, id) => params =>
  create({
    commentable_id: id,
    commentable_type: 'Material',
    ...params,
  })

export default props => {
  const { current } = props

  return (
    <New
      name="comments"
      render={({ create, creating, error }) => (
        <Form
          onSubmit={createWithParams(create, current.id)}
          submitting={creating}
          createError={error}
          {...props}
        />
      )}
    />
  )
}
