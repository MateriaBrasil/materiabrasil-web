import React from 'react';
import Route from 'react-router-dom/Route';

import renderCategorySingle from './renderInfo';

export default props => (
  <div>
    <Route path="/categories/:id" render={renderCategorySingle(props)} />
  </div>
);
