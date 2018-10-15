import React from 'react'
import { reduxForm } from 'redux-form'
import CardHeader from '@material-ui/core/CardHeader'
import { required, email } from 'redux-form-validators'
import Button from '@material-ui/core/Button'

import Error from 'Error'
import SingleColumn from '../../SingleColumn'
import TextField from '../../form/TextField'
import createWithParams from './createWithParams'

export default reduxForm({ form: 'forgotPassword' })(props => {
  const { title, handleSubmit, create, creating, error } = props

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
        {error && <Error>{error}</Error>}
        <Button
          variant="raised"
          color="primary"
          type="submit"
          disabled={creating}
          style={{ width: '100%', marginTop: '20px' }}
        >
          Enviar
        </Button>
      </form>
    </SingleColumn>
  )
})
