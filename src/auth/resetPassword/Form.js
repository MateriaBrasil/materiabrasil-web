import React from 'react'
import { reduxForm } from 'redux-form'
import CardHeader from '@material-ui/core/CardHeader'
import { required } from 'redux-form-validators'
import Button from '@material-ui/core/Button'
import Error from 'Error'

import SingleColumn from '../../SingleColumn'
import TextField from '../../form/TextField'
import createWithParams from './createWithParams'

export default reduxForm({ form: 'resetPassword' })(props => {
  const { title, handleSubmit, create, creating, error } = props
  return (
    <SingleColumn>
      <form onSubmit={handleSubmit(createWithParams(create, props))}>
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
        {error && <Error>{error}</Error>}
        <Button
          variant="raised"
          color="primary"
          type="submit"
          disabled={creating}
          style={{ width: '100%', marginTop: '20px' }}
        >
          Alterar senha
        </Button>
      </form>
    </SingleColumn>
  )
})
