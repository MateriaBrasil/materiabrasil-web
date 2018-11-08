import React from 'react'
import { reduxForm } from 'redux-form'
import { required } from 'redux-form-validators'

import Dialog from 'materials/Dialog'
import Error from 'Error'
import TextField from '../form/TextField'
import SelectField from '../form/SelectField'

export default reduxForm({ form: 'addresses' })(props => {
  const { error: reduxFormError, createError } = props
  const error = reduxFormError || createError

  return (
    <Dialog
      {...props}
      title="Adicionar Endereço"
      callToAction="ADICIONAR ENDEREÇO"
    >
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
      <Error>{error}</Error>
    </Dialog>
  )
})
