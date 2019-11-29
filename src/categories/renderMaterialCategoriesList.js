import React from 'react';
import { New } from 'croods';

import renderNew from './renderNew';
import renderCreated from './renderCreated';

export default parentProps => (materialCategories, { actions }) => {
  const props = {
    ...parentProps,
    setMaterialCategories: actions.setList,
    materialCategories,
  };

  return (
    <New
      name="materialCategories"
      path="/material_categories"
      render={renderNew(props)}
      renderCreated={renderCreated(props)}
    />
  );
};
