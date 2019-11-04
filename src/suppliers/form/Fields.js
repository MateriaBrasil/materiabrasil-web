import React, { Fragment } from 'react';
import { required, email } from 'redux-form-validators';

import TextField from '../../form/TextField';
import SelectField from '../../form/SelectField';

export default () => {
  return (
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
          {
            value: 1,
            label:
              'PP (Produção Artesanal ou Semi Artesanal com até 20 Funcionários)',
          },
          { value: 2, label: 'P (20-99 Funcionários)' },
          { value: 3, label: 'M e G (100+ Funcionários)' },
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

      <SelectField
        name="addresses_attributes.addressType"
        label="Tipo de endereço"
        options={[
          { value: 'manufacture', label: 'Endereço de fabricação' },
          { value: 'postal', label: 'Endereço para correspondência' },
        ]}
        validate={[required()]}
        style={{ marginBottom: 10 }}
      />
      <TextField
        name="addresses_attributes.streetAddress"
        label="Endereço com rua, número e complemento"
        type="text"
        validate={[required()]}
      />
      <TextField
        name="addresses_attributes.city"
        label="Cidade"
        type="text"
        validate={[required()]}
      />
      <SelectField
        name="addresses_attributes.state"
        label="Estado"
        options={[
          { value: 'AC', label: 'Acre' },
          { value: 'AL', label: 'Alagoas' },
          { value: 'AP', label: 'Amapá' },
          { value: 'AM', label: 'Amazonas' },
          { value: 'BA', label: 'Bahia' },
          { value: 'CE', label: 'Ceará' },
          { value: 'DF', label: 'Distrito Federal' },
          { value: 'ES', label: 'Espírito Santo' },
          { value: 'GO', label: 'Goías' },
          { value: 'MA', label: 'Maranhão' },
          { value: 'MT', label: 'Mato Grosso' },
          { value: 'MS', label: 'Mato Grosso do Sul' },
          { value: 'MG', label: 'Minas Gerais' },
          { value: 'PA', label: 'Pará' },
          { value: 'PB', label: 'Paraíba' },
          { value: 'PR', label: 'Paraná' },
          { value: 'PE', label: 'Pernambuco' },
          { value: 'PI', label: 'Piauí' },
          { value: 'RJ', label: 'Rio de Janeiro' },
          { value: 'RN', label: 'Rio Grande do Norte' },
          { value: 'RS', label: 'Rio Grande do Sul' },
          { value: 'RO', label: 'Rondônia' },
          { value: 'RR', label: 'Roraíma' },
          { value: 'SC', label: 'Santa Catarina' },
          { value: 'SP', label: 'São Paulo' },
          { value: 'SE', label: 'Sergipe' },
          { value: 'TO', label: 'Tocantins' },
        ]}
        validate={[required()]}
      />
      <TextField
        name="addresses_attributes.country"
        label="País"
        type="text"
        validate={[required()]}
      />
      <TextField name="addresses_attributes.zipCode" label="CEP" type="text" />
    </Fragment>
  );
};
