import React, { Fragment } from 'react'
import { required, email } from 'redux-form-validators'

import TextField from '../../form/TextField'
import SelectField from '../../form/SelectField'
import parseValue from './parseValue'
import formatValue from './formatValue'

export default () => (
  <Fragment>
    <TextField
      name="name"
      label="Nome da empresa"
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
    <TextField name="cnpj" label="CNPJ" type="text" validate={[required()]} />
    <TextField
      name="companyName"
      label="Razão Social"
      type="text"
      validate={[required()]}
    />
    <TextField
      name="municipalSubscription"
      label="Inscrição municipal"
      type="text"
      validate={[required()]}
    />
    <TextField
      name="stateSubscription"
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
      name="companyRevenue"
      label="Faturamento aproximado do último exercício"
      type="text"
    />
    <TextField
      name="numberOfEmployees"
      label="Quantidade de funcionários"
      type="number"
      parse={parseValue}
      format={formatValue}
    />
    <SelectField
      name="reach"
      label="Qual é o alcance de sua empresa?"
      options={[
        { value: 'city', label: 'Cidade' },
        { value: 'state', label: 'Estado' },
        { value: 'country', label: 'País' },
        { value: 'continent', label: 'Continente' },
        { value: 'global', label: 'Global' },
      ]}
      validate={[required()]}
    />
  </Fragment>
)
