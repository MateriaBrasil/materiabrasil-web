import React from 'react';

import Form from '../form/Form';
import updateSelectedParams from './updateSelectedParams';

export default props => ({ info, update, updating, error }) => {
  return (
    <Form
      onSubmit={updateSelectedParams(update)}
      submitting={updating}
      updateError={error}
      initialValues={info}
      buttonText="Atualizar fornecedor"
      {...props}
    />
  );
};
