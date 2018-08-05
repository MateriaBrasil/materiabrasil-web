import React from 'react'
import { reduxForm } from 'redux-form'
import { required, email } from 'redux-form-validators'
import Button from '@material-ui/core/Button'

import SingleColumn from '../../SingleColumn'
import Error from '../../Error'
import TextField from '../../form/TextField'
import SelectField from '../../form/SelectField'

export default reduxForm({ form: 'suppliers' })(props => {
  const { handleSubmit, onSubmit, error: reduxFormError, createError } = props
  const { submitting } = props
  const error = reduxFormError || createError

  return (
    <SingleColumn>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="name"
          label="Nome"
          type="text"
          validate={[required()]}
        />
        <TextField
          name="website"
          label="Site"
          type="text"
          validate={[required()]}
        />
        <TextField
          name="description"
          label="Descrição"
          type="text"
          multiline
          validate={[required()]}
        />
        <TextField
          name="email"
          label="Email"
          type="email"
          validate={[required(), email()]}
        />
        <TextField
          name="cnpj"
          label="CNPJ"
          type="text"
          validate={[required()]}
        />
        <TextField
          name="company_name"
          label="Razão Social"
          type="text"
          validate={[required()]}
        />
        <TextField
          name="municipal_subscription"
          label="Inscrição municipal"
          type="text"
          validate={[required()]}
        />
        <TextField
          name="state_subscription"
          label="Inscrição estadual"
          type="text"
          validate={[required()]}
        />
        <TextField
          name="phone"
          label="Telefone"
          type="phone"
          validate={[required()]}
        />
        <TextField
          name="company_revenue"
          label="Faturamento aproximado do último exercício"
          type="text"
          validate={[required()]}
        />
        <TextField
          name="number_of_employees"
          label="Quantidade de funcionários"
          type="number"
          parse={value => value && parseInt(value, 10)}
          format={value => value && value.toString()}
          validate={[required()]}
        />
        <SelectField
          name="reach"
          label="Alcance"
          validate={[required()]}
          options={[
            { value: 'city', label: 'Cidade' },
            { value: 'state', label: 'Estado' },
            { value: 'country', label: 'País' },
            { value: 'continent', label: 'Continente' },
            { value: 'global', label: 'Global' },
          ]}
        />
        <div style={{ marginTop: 30, textAlign: 'right' }}>
          <Button
            variant="raised"
            color="primary"
            type="submit"
            disabled={submitting}
          >
            Registrar fornecedor
          </Button>
        </div>
        {error && <Error>{error}</Error>}
      </form>
    </SingleColumn>
  )
})
