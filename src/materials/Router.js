import React from 'react'
import Route from 'react-router-dom/Route'

import renderReviews from '../reviews/render'
import renderList from './renderList'
import renderInfo from './renderInfo'
import renderEdit from './renderEdit'
import renderImageUpload from './renderImageUpload'

export default props => (
  <div>
    <Route exact path="/" render={renderList(props)} />
    <Route exact path="/:id/edit" render={renderEdit(props)} />
    <Route path="/:id" render={renderInfo(props)} />
    <Route path="/:id/reviews" render={renderReviews(props)} />
    <Route
      exact
      path="/:id/coverImage"
      render={renderImageUpload({
        ...props,
        width: 1920,
        height: 640,
        attributeName: 'coverImageUrl',
      })}
    />
    <Route
      exact
      path="/:id/listImage"
      render={renderImageUpload({
        ...props,
        width: 720,
        height: 480,
        attributeName: 'listImageUrl',
      })}
    />
    <Route
      exact
      path="/:id/highlightImage"
      render={renderImageUpload({
        ...props,
        width: 1920,
        height: 720,
        attributeName: 'highlightImageUrl',
      })}
    />
  </div>
)
