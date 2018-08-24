import React from 'react'
import { reduxForm } from 'redux-form'

import Error from '../../Error'
import TextField from '../../form/TextField'
import Submit from '../../form/Submit'
import SingleColumn from '../../SingleColumn'
import Loading from '../../Loading'

import { required, email } from 'redux-form-validators'
import Button from '@material-ui/core/Button'
import parseValue from '../new/parseValue'
import formatValue from '../new/formatValue'

import SelectField from '../../form/SelectField'

export default reduxForm({ form: 'suppliers' })(props => {
  const { handleSubmit, submitting, onSubmit, error: reduxFormError, updateError } = props
  const { updating } = props
  const error = reduxFormError || updateError

  return (
    <SingleColumn>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="name"
          label="Nome da empresa"
          type="text"
        />
        <TextField
          name="website"
          label="Site"
          type="text"
        />
        <TextField
          name="description"
          label="Descrição"
          type="text"
          multiline
        />
        <TextField
          name="email"
          label="Email"
          type="email"
        />
        <TextField
          name="cnpj"
          label="CNPJ"
          type="text"
        />
        <TextField
          name="company_name"
          label="Razão Social"
          type="text"
        />
        <TextField
          name="municipal_subscription"
          label="Inscrição municipal"
          type="text"
        />
        <TextField
          name="state_subscription"
          label="Inscrição estadual"
          type="text"
        />
        <TextField
          name="phone"
          label="Telefone"
          type="phone"
        />
        <TextField
          name="company_revenue"
          label="Faturamento aproximado do último exercício"
          type="text"
        />
        <TextField
          name="number_of_employees"
          label="Quantidade de funcionários"
          type="number"
          parse={parseValue}
          format={formatValue}
        />
        <SelectField
          name="reach"
          label="Alcance"
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
            Atualizar fornecedor
          </Button>
        </div>
        {error && <Error>{error}</Error>}
      </form>
    </SingleColumn>
  )
})
