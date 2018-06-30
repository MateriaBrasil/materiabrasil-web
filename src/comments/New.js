import React from 'react'
import { New } from 'croods'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

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
      path="/comments"
      render={({ create, creating, error }) => (
        <Form
          onSubmit={createWithParams(create, current.id)}
          submitting={creating}
          createError={error}
          {...props}
        />
      )}
      renderCreated={created => <div>Comentário criado com sucesso!</div>}
    />
  )
}
