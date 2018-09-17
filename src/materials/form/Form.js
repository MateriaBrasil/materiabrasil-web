import React from 'react'
import { reduxForm } from 'redux-form'

import Error from 'Error'
import Fields from './Fields'
import Dialog from '../Dialog'

export default reduxForm({ form: 'materials' })(props => {
  const { handleSubmit, onSubmit, error: reduxFormError, createError } = props
  const { valid, submitting, buttonText } = props
  const error = reduxFormError || createError

  return (
    <Dialog
      {...props}
      title={buttonText}
      callToAction={buttonText}
      disabled={!valid || submitting}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fields />
        <Error>{error}</Error>
      </form>
    </Dialog>
  )
})
