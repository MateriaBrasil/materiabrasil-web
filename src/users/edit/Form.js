import React from 'react'
import { reduxForm } from 'redux-form'

import Dialog from 'materials/Dialog'
import Error from 'Error'
import TextField from '../../form/TextField'
import Loading from '../../Loading'

export default reduxForm({ form: 'profile' })(props => {
  const { handleSubmit, onSubmit, error: reduxFormError, updateError } = props
  const { updating } = props
  const error = reduxFormError || updateError

  return (
    <Dialog {...props} title="Editar perfil" callToAction="ATUALIZAR PERFIL">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField name="firstName" label="Nome" type="text" />
        <TextField name="lastName" label="Sobrenome" type="text" />
        <TextField name="email" label="Email" type="email" />
        <TextField name="bio" label="Sobre você" type="text" multiline />
        <TextField name="city" label="Cidade" type="text" />
        <TextField name="state" label="Estado" type="text" />
        <TextField name="country" label="País" type="text" />
        <TextField name="company" label="Empresa / Organização" type="text" />
        <TextField name="workTitle" label="Cargo" type="text" />
        <TextField name="website" label="Site" type="text" />
        {updating && <Loading />}
        <Error>{error}</Error>
      </form>
    </Dialog>
  )
})
