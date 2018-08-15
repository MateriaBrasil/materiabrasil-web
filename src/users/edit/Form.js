import React from 'react'
import { reduxForm } from 'redux-form'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Error from '../../Error'
import TextField from '../../form/TextField'
import Submit from '../../form/Submit'
import SingleColumn from '../../SingleColumn'

export default reduxForm({ form: 'profile' })(props => {
  const { handleSubmit, onSubmit, error: reduxFormError, updateError } = props
  const { submitting } = props
  const error = reduxFormError || updateError

  return (
    <SingleColumn>
      <Card>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField name="firstName" label="Nome" type="text" />
            <TextField name="lastName" label="Sobrenome" type="text" />
            <TextField name="bio" label="Sobre você" type="text" multiline />
            <TextField name="city" label="Cidade" type="text" />
            <TextField name="state" label="Estado" type="text" />
            <TextField name="country" label="País" type="text" />
            <TextField
              name="company"
              label="Empresa / Organização"
              type="text"
            />
            <TextField name="workTitle" label="Cargo" type="text" />
            <TextField name="website" label="Site" type="text" />
            <Submit callToAction="Atualizar perfil" disabled={submitting} />
            {error && <Error>{error}</Error>}
          </form>
        </CardContent>
      </Card>
    </SingleColumn>
  )
})
