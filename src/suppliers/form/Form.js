import React from 'react';
import { reduxForm } from 'redux-form';
import Dialog from 'materials/Dialog';

import Error from 'Error';
import Fields from './Fields';

export default reduxForm({ form: 'suppliers' })(props => {
  const { handleSubmit, onSubmit, error: reduxFormError, createError } = props;
  const { buttonText } = props;
  const error = reduxFormError || createError;

  return (
    <Dialog {...props} title="Editar perfil" callToAction={buttonText}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fields />
        <Error>{error}</Error>
      </form>
    </Dialog>
  );
});
