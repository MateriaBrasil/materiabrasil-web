import React from 'react'
import { reduxForm } from 'redux-form'
import omit from 'lodash/omit'
import { required } from 'redux-form-validators'

import DefaultForm from '../form/Form'
import TextField from '../form/TextField'

const Form = props => {
  const { handleSubmit, onSubmit, error: reduxFormError, createError } = props
  const error = reduxFormError || createError
  const formProps = omit(props, ['handleSubmit', 'onSubmit', 'error'])

  return (
    <DefaultForm
      callToAction="Enviar comentário"
      onSubmit={handleSubmit(onSubmit)}
      error={error}
      buttonStyle={{ width: '40%' }}
      {...formProps}
    >
      <TextField
        name="text"
        label="Comentar"
        type="text"
        multiline
        rows="5"
        validate={[required()]}
      />
    </DefaultForm>
  )
}

export default reduxForm({ form: 'comments' })(Form)
