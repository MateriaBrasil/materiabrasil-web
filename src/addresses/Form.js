import React from 'react'
import { reduxForm } from 'redux-form'
import { required } from 'redux-form-validators'

import Error from '../Error'
import TextField from '../form/TextField'
import SelectField from '../form/SelectField'
import Submit from '../form/Submit'

export default reduxForm({ form: 'addresses' })(props => {
  const { handleSubmit, onSubmit, error: reduxFormError, createError } = props
  const { creating, invalid } = props
  const error = reduxFormError || createError

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: 30 }}>
      <SelectField
        name="addressType"
        label="Tipo"
        options={[
          { value: 'manufacture', label: 'Endereço de fabricação' },
          { value: 'postal', label: 'Endereço para correspondência' },
        ]}
        validate={[required()]}
        style={{ marginBottom: 10 }}
      />
      <TextField
        name="streetAddress"
        label="Endereço com rua, número e complemento"
        type="text"
        validate={[required()]}
      />
      <TextField
        name="city"
        label="Cidade"
        type="text"
        validate={[required()]}
      />
      <TextField
        name="state"
        label="Estado"
        type="text"
        validate={[required()]}
      />
      <TextField
        name="country"
        label="País"
        type="text"
        validate={[required()]}
      />
      <TextField name="zipCode" label="CEP" type="text" />
      <TextField name="phoneNumber" label="Telefone para contato" type="text" />
      <Submit
        callToAction="Adicionar endereço"
        disabled={creating || invalid}
      />
      {error && <Error>{error}</Error>}
    </form>
  )
})
