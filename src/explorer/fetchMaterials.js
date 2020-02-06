import React, { useState } from 'react';
import Filters from 'categories/Filters';

import MaterialsLoop from './materialsLoop';
import { MaterialsContainer } from './styles';
import './reset.css';

export default function(props) {
  const { comparison } = props;
  return (
    <div className="home_page_explore">
      <Filters
        {...props}
        render={({ categories }) => (
          <MaterialsContainer>
            <MaterialsLoop
              term={props.term}
              categories={categories}
              comparison={comparison}
            />{' '}
          </MaterialsContainer>
        )}
      />
    </div>
  );
}
