import React from 'react';
import Route from 'react-router-dom/Route';

import renderCategorySingle from './info';

export default props => (
  <div>
    <Route path="/categories/:id" render={renderCategorySingle(props)} />
  </div>
);
