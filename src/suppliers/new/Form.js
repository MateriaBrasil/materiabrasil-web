import React from 'react'
import { reduxForm } from 'redux-form'
import { required } from 'redux-form-validators'
import Button from '@material-ui/core/Button'

import SingleColumn from '../../SingleColumn'
import Error from '../../Error'
import TextField from '../../form/TextField'

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
          validate={[required()]}
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
          label="Faturamento do último exercício"
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
        <TextField
          name="reach"
          label="Alcance de fornecimento"
          type="text"
          validate={[required()]}
        />
        <div style={{ textAlign: 'right' }}>
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
