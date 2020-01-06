import React, { useState } from 'react';
import Filters from 'categories/Filters';

import MaterialsLoop from './materialsLoop';
import { MaterialsContainer } from './styles';
import './reset.css';

export default function(props) {
  const [per, setPer] = useState(9);
  const fetchMoreData = function() {
    setPer(per + 9);
  };

  return (
    <div className="home_page_explore">
      <Filters
        {...props}
        render={({ categories }) => (
          <MaterialsContainer>
            <MaterialsLoop
              term={props.term}
              fetchMoreData={fetchMoreData}
              categories={categories}
            />{' '}
          </MaterialsContainer>
        )}
      />
    </div>
  );
}
