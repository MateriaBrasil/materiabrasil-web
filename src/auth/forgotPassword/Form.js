import React from 'react'
import { reduxForm } from 'redux-form'
import CardHeader from '@material-ui/core/CardHeader'
import { required } from 'redux-form-validators'
import Error from 'Error'

import SingleColumn from '../../SingleColumn'
import DefaultForm from '../../form/Form'

import TextField from '../../form/TextField'

const Form = props => {
  const { onSubmit, title, error } = props
  debugger
  return (
    <SingleColumn>
      <DefaultForm
        callToAction="Recuperar senha"
        error={error}
        onSubmit={onSubmit}
      >
        {title && <CardHeader title={title} />}
        <TextField
          name="email"
          label="email"
          type="email"
          validate={[required()]}
        />
        <Error>{error}</Error>
      </DefaultForm>
    </SingleColumn>
  )
}

export default reduxForm({ form: 'forgotPassword' })(Form)
