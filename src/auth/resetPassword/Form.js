import React from 'react'
import { reduxForm } from 'redux-form'
import CardHeader from '@material-ui/core/CardHeader'
import { required, length, confirmation } from 'redux-form-validators'
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
          validate={[required(), length({ min: 8 })]}
        />
        <TextField
          name="passwordConfirmation"
          label="Confirmar senha"
          type="password"
          validate={[
            required(),
            confirmation({ field: 'password', fieldLabel: 'Senha' }),
          ]}
        />
        {error && <Error>{error}</Error>}
        <Button
          type="submit"
          style={{ width: '100%', marginTop: '20px' }}
          variant="raised"
          color="primary"
          disabled={creating}
        >
          Alterar senha
        </Button>
      </form>
    </SingleColumn>
  )
})
