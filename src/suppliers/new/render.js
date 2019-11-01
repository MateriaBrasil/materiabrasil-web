import React from 'react';

import Form from '../form/Form';

export default props => ({ create, creating, error }) => {
  const handleSubmit = function(e) {
    create(e);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      submitting={creating}
      createError={error}
      buttonText="Registrar fornecedor"
      {...props}
    />
  );
};
