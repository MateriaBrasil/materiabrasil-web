import React from 'react'
import { reduxForm } from 'redux-form'
import { required } from 'redux-form-validators'
import Button from '@material-ui/core/Button'

import Error from '../Error'
import TextField from '../form/TextField'

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
      <div style={{ textAlign: 'right' }}>
        <Button
          variant="raised"
          color="primary"
          type="submit"
          disabled={submitting}
        >
          Enviar comentário
        </Button>
      </div>
      {error && <Error>{error}</Error>}
    </form>
  )
})
