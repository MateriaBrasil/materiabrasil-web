import React from 'react'
import { reduxForm } from 'redux-form'
import CardHeader from '@material-ui/core/CardHeader'
import Validators, { required, email } from 'redux-form-validators'
import Button from '@material-ui/core/Button'

import Error from 'Error'
import SingleColumn from '../../SingleColumn'
import TextField from '../../form/TextField'
import createWithParams from './createWithParams'

export default reduxForm({ form: 'forgotPassword' })(props => {
  const { title, handleSubmit, create, creating, error } = props

  Object.assign(Validators.messages, {
    email: {
      id: 'form.errors.email',
      defaultMessage: 'Não é um email válido',
    },
  })

  return (
    <SingleColumn>
      <form onSubmit={handleSubmit(createWithParams(create))}>
        {title && <CardHeader title={title} />}
        <TextField
          name="email"
          label="E-mail"
          type="email"
          validate={[required(), email()]}
        />
        <Error>{error}</Error>
        <Button
          variant="raised"
          color="primary"
          type="submit"
          disabled={creating}
          style={{ width: '100%' }}
        >
          Enviar
        </Button>
      </form>
    </SingleColumn>
  )
})
