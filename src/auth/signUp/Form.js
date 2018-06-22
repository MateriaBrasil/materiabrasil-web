import React from 'react'
import { reduxForm } from 'redux-form'
import omit from 'lodash/omit'
import map from 'lodash/map'

import DefaultForm from '../../form/Form'
import TextField from '../../form/TextField'

import fields from './fields'

const Form = props => {
  const { handleSubmit, onSubmit, error: reduxFormError, createError } = props
  const error = reduxFormError || createError
  const formProps = omit(props, ['handleSubmit', 'onSubmit', 'error'])

  return (
    <DefaultForm
      callToAction="Registre-se"
      onSubmit={handleSubmit(onSubmit)}
      error={error}
      {...formProps}
    >
      {map(fields, (field, key) => {
        return <TextField key={key} {...field} />
      })}
    </DefaultForm>
  )
}

export default reduxForm({ form: 'signUp' })(Form)
