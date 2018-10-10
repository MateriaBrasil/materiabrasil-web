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

  return (
    <SingleColumn>
      <DefaultForm callToAction="Recuperar senha" error={error}>
        <form onSubmit={onSubmit}>
          {title && <CardHeader title={title} />}
          <TextField
            name="password"
            label="Senha"
            type="password"
            validate={[required()]}
          />
          <TextField
            name="passwordConfirmation"
            label="Confirmar senha"
            type="password"
            validate={[required()]}
          />
          <Error>{error}</Error>
        </form>
      </DefaultForm>
    </SingleColumn>
  )
}

export default reduxForm({ form: 'forgotPassword' })(Form)
