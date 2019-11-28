import React from 'react';

import createWithParams from './createWithParams';
import Button from './Button';

export default ({ materialId, albumId, ...props }) => ({ create }) => {
  console.log(materialId);

  return (
    <Button
      onClick={createWithParams(create, materialId, albumId)}
      {...props}
    />
  );
};
