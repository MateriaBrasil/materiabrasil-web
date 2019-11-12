import React from 'react';

import Form from './Form';
import updateSelectedParams from './updateSelectedParams';

export default props => {
  const { match, updating, update, error, info } = props;
  const { id } = match.params;

  return (
    <Form
      {...props}
      id={id}
      initialValues={info}
      onSubmit={updateSelectedParams(update)}
      submitting={updating}
      updateError={error}
    />
  );
};
