import React from 'react';
import { New } from 'croods';

import renderNew from './renderNew';

export default props => {
  const { id, type } = props;

  return (
    <New parentId={`${type}-${id}`} name="comments" render={renderNew(props)} />
  );
};
