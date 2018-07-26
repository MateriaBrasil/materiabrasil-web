import React from 'react'
import Route from 'react-router-dom/Route'

import renderReviews from '../reviews/render'
import renderList from './renderList'
import renderInfo from './renderInfo'

export default props => (
  <div>
    <Route exact path="/" render={renderList(props)} />
    <Route path="/:id" render={renderInfo(props)} />
    <Route path="/:id/reviews" render={renderReviews(props)} />
  </div>
)
