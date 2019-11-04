import React from 'react';
import { reduxForm } from 'redux-form';
import { required } from 'redux-form-validators';

import Dialog from 'materials/Dialog';
import Error from 'Error';
import TextField from '../form/TextField';
import SelectField from '../form/SelectField';

export default reduxForm({ form: 'addresses' })(props => {
  const { error: reduxFormError, createError } = props;
  const error = reduxFormError || createError;

  return (
    <Dialog
      {...props}
      title="Adicionar Endereço"
      callToAction="ADICIONAR ENDEREÇO"
    >
      <SelectField
        name="addressType"
        label="Tipo"
        options={[
          { value: 'manufacture', label: 'Endereço de fabricação' },
          { value: 'postal', label: 'Endereço para correspondência' },
        ]}
        validate={[required()]}
        style={{ marginBottom: 10 }}
      />
      <TextField
        name="streetAddress"
        label="Endereço com rua, número e complemento"
        type="text"
        validate={[required()]}
      />
      <TextField
        name="city"
        label="Cidade"
        type="text"
        validate={[required()]}
      />
      <SelectField
        name="state"
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
        name="country"
        label="País"
        type="text"
        validate={[required()]}
      />
      <TextField name="zipCode" label="CEP" type="text" />
      <TextField name="phoneNumber" label="Telefone para contato" type="text" />
      <Error>{error}</Error>
    </Dialog>
  );
});
