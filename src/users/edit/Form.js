import React from 'react'
import { reduxForm } from 'redux-form'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

import Error from '../../Error'
import TextField from '../../form/TextField'
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
            <div style={{ textAlign: 'right' }}>
              <Button
                variant="raised"
                color="primary"
                type="submit"
                disabled={submitting}
              >
                Atualizar perfil
              </Button>
            </div>
            {error && <Error>{error}</Error>}
          </form>
        </CardContent>
      </Card>
    </SingleColumn>
  )
})
