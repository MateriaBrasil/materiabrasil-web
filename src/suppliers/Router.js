import React from 'react'
import Route from 'react-router-dom/Route'

import renderNew from './renderNew'

export default props => (
  <div>
    <Route path="/suppliers/new" render={renderNew(props)} />
  </div>
)
