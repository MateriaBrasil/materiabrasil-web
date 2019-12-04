import React from 'react';
import { List } from 'croods';

import renderList from './renderMaterialCategoriesList';

export default props => categories => (
  <List
    name="materialCategories"
    path={`/materials/${props.match.params.id}/categories`}
    render={renderList({ ...props, categories })}
  />
);
