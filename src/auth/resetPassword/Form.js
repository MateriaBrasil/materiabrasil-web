import React from 'react'
import { reduxForm } from 'redux-form'
import CardHeader from '@material-ui/core/CardHeader'
import { required } from 'redux-form-validators'
import Button from '@material-ui/core/Button'
import Error from 'Error'

import SingleColumn from '../../SingleColumn'

import TextField from '../../form/TextField'

export default reduxForm({ form: 'resetPassword' })(props => {
  const { title, handleSubmit, create, creating, error } = props
  return (
    <SingleColumn>
      <form onSubmit={handleSubmit(create)}>
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
        <Button
          variant="raised"
          color="primary"
          type="submit"
          disabled={creating}
          style={{ width: '100%' }}
        >
          Alterar senha
        </Button>
      </form>
    </SingleColumn>
  )
})
