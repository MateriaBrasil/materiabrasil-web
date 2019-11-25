import React from 'react';

import { StyledFilters } from '../styles';
import List from './List';

export default props => list => (
  <StyledFilters
    render={filters => <List {...props} filters={filters} list={list} />}
  />
);
