import React, { Fragment } from 'react'
import { required } from 'redux-form-validators'

import TextField from '../../form/TextField'

export default () => (
  <Fragment>
    <TextField
      name="name"
      label="Nome do material"
      type="text"
      validate={[required()]}
    />
    <TextField name="code" label="Código" type="text" validate={[required()]} />
    <TextField
      name="averagePrice"
      label="Preço médio"
      type="text"
      validate={[required()]}
    />
    <TextField
      name="description"
      label="Descrição"
      type="text"
      validate={[required()]}
      multiline
    />
    <TextField
      name="properties"
      label="Propriedades"
      type="text"
      validate={[required()]}
      multiline
    />
    <TextField
      name="usage"
      label="Onde pode ser usado"
      type="text"
      validate={[required()]}
      multiline
    />
  </Fragment>
)
