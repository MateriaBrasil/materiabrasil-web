import React, { Fragment } from 'react'
import { required } from 'redux-form-validators'

import TextField from '../../form/TextField'
import ncmNormalizer from './ncmNormalizer'
import shNormalizer from './shNormalizer'
import parseValue from './parseValue'

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
      name="description"
      label="Descrição"
      type="text"
      validate={[required()]}
      multiline
    />
    <TextField
      name="availability"
      label="Disponibilidade"
      placeholder="Estados do Brasil e/ou países"
      type="text"
    />
    <TextField
      name="unitOfSale"
      label="Unidade de venda"
      placeholder="(ex: metro, m2, bobina, embalagem com 6, etc)"
      type="text"
    />
    <TextField
      name="averagePrice"
      label="Preço médio (por unidade de venda)"
      type="text"
      validate={[required()]}
    />
    <TextField
      name="minimumPurchaseQuantity"
      label="Pedido mínimo"
      type="number"
      parse={parseValue}
    />
    <TextField
      name="maximumPurchaseQuantity"
      label="Pedido máximo"
      type="number"
      parse={parseValue}
    />
    <TextField
      name="ncmCode"
      label="NCM"
      placeholder="Oito dígitos, no modelo 19.05.31.00"
      normalize={ncmNormalizer}
      type="text"
    />
    <TextField
      name="shCode"
      label="SH"
      placeholder="Seis dígitos, no modelo 0103.91"
      normalize={shNormalizer}
      type="text"
    />
    <TextField
      name="certifications"
      label="Certificações"
      placeholder="Lista de certificações"
      type="text"
      multiline
    />
    <TextField
      name="prizes"
      label="Prêmios"
      placeholder="Lista de prêmios"
      type="text"
      multiline
    />
    <TextField
      name="density"
      label="Densidade"
      placeholder="Densidade"
      type="text"
    />
    <TextField
      name="dimensions"
      label="Dimensões"
      placeholder="Dimensões"
      type="text"
    />
  </Fragment>
)
