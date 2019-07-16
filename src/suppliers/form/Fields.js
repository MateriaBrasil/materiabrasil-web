import React, { Fragment } from 'react'
import { required, email } from 'redux-form-validators'

import TextField from '../../form/TextField'
import SelectField from '../../form/SelectField'

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
    <SelectField
      name="typeOfCompany"
      label="Tipo de empresa"
      options={[
        { value: 1, label: 'P (1-99 Funcionários)' },
        { value: 2, label: 'M (100-499 Funcionários)' },
        { value: 3, label: 'G (500+ Funcionários)' },
        { value: 4, label: 'Serviços' },
      ]}
      validate={[required()]}
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
