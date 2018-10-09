import React from 'react'
import { reduxForm } from 'redux-form'
import CardHeader from '@material-ui/core/CardHeader'
import Button from '@material-ui/core/Button'
import { required } from 'redux-form-validators'
import SingleColumn from '../../SingleColumn'
import DefaultForm from '../../form/Form'

import TextField from '../../form/TextField'

import Error from 'Error'

const Form = props => {
  const { onSubmit, title, callToAction, error, submitting } = props

  return (
    <SingleColumn>
      <DefaultForm callToAction="Recuperar senha" error={error}>
        <form onSubmit={onSubmit}>
          {title && <CardHeader title={title} />}
          <TextField
            name="email"
            label="email"
            type="email"
            validate={[required()]}
          />
          <Error>{error}</Error>
        </form>
      </DefaultForm>
    </SingleColumn>
  )
}

export default reduxForm({ form: 'resetPassword' })(Form)
