import React, { useState } from 'react';

import { List } from 'croods';
import Link from 'react-router-dom/Link';
import Filters from 'categories/Filters';
import {
  MaterialsList,
  MaterialSingle,
  StyledTypography,
  StyledButton,
} from './styles';

import download from './download.png';
import favorites from './favorites.png';
import MaterialsLoop from './materialsLoop';
import { MaterialsContainer } from './styles';
import './reset.css';

export default function(props) {
  let border_string;
  const { currentUser } = props;
  const [per, setPer] = useState(9);
  const fetchMoreData = function() {
    setPer(per + 9);
  };

  const setData = function(props, categories) {
    const term = encodeURI(props.term);

    if (props.term) {
      return `/search?term=${term}&${categories}&per_page=${per}`;
    } else {
      return `/materials?${categories}&per_page=${per}`;
    }
  };

  return (
    <div className="home_page_explore">
      <Filters
        {...props}
        render={({ categories }) => (
          <MaterialsContainer>
            <MaterialsLoop categories={categories} />{' '}
          </MaterialsContainer>
        )}
      />
    </div>
  );
}
