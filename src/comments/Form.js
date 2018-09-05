import React from 'react'
import { reduxForm } from 'redux-form'
import { required } from 'redux-form-validators'

import Error from 'Error'
import TextField from '../form/TextField'
import Submit from '../form/Submit'

export default reduxForm({ form: 'comments' })(props => {
  const { handleSubmit, onSubmit, error: reduxFormError, createError } = props
  const { submitting } = props
  const error = reduxFormError || createError

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="text"
        label="Deixe seu comentário"
        type="text"
        multiline
        validate={[required()]}
      />
      <Submit callToAction="Enviar comentário" disabled={submitting} />
      <Error>{error}</Error>
    </form>
  )
})
