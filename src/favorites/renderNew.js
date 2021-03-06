import React from 'react';

import createWithParams from './createWithParams';
import Button from './Button';

export default ({ materialId, albumId, ...props }) => ({ create }) => {
  return (
    <Button
      onClick={createWithParams(create, materialId, albumId)}
      {...props}
    />
  );
};
