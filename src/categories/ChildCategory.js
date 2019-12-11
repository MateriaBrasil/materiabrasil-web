import React from 'react';
import find from 'lodash/find';
import map from 'lodash/map';
import includes from 'lodash/includes';

import Create from './Create';
import Checkbox from './Checkbox';
import Destroy from './Destroy';

import './ChildCategory.css';

export default props => {
  const { materialCategories, parent, category, filters = {} } = props;
  const { selectCategory, unselectCategory } = filters.actions || {};

  const materialCategory = find(
    materialCategories,
    ({ categoryId }) => categoryId === category.id,
  );
  const childProps = {
    ...props,
    key: category.id,
    parent,
    category,
    materialCategory,
  };

  const Component = materialCategory ? Destroy : Create;
  const checked = includes(
    map(filters.selectedCategories, ({ id }) => id),
    category.id,
  );
  const filterAction = checked ? unselectCategory : selectCategory;
  const action = () => filterAction(category);

  return filters.selectedCategories ? (
    <Checkbox {...childProps} action={action} checked={checked} />
  ) : (
    <Component className="no-margin" {...childProps} />
  );
};
