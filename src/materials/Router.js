import React from 'react';
import Route from 'react-router-dom/Route';

import renderReviews from '../reviews/render';
import renderList from './renderList';
import renderInfo from './renderInfo';
import renderEdit from './renderEdit';
import renderCategories from '../categories/render';
import renderImageUpload from './renderImageUpload';
import renderQuestionnaires from '../questionnaires/renderList';
import renderAlbums from '../albums/renderList';
import renderNew from '../albums/renderNew';

export default props => (
  <div>
    <Route exact path="/materials" render={renderList(props)} />
    <Route exact path="/materials/:id/edit" render={renderEdit(props)} />
    <Route
      exact
      path="/materials/:id/categories"
      render={renderCategories(props)}
    />
    <Route path="/materials/:id" render={renderInfo(props)} />
    <Route path="/materials/:id/reviews" render={renderReviews(props)} />
    <Route exact path="/materials/:id/albums" render={renderAlbums(props)} />
    <Route exact path="/materials/:id/albums/new" render={renderNew(props)} />
    <Route
      exact
      path="/materials/:id/coverImage"
      render={renderImageUpload({
        ...props,
        width: 1920,
        height: 640,
        attributeName: 'coverImageUrl',
      })}
    />
    <Route
      exact
      path="/materials/:id/listImage"
      render={renderImageUpload({
        ...props,
        width: 720,
        height: 540,
        attributeName: 'listImageUrl',
      })}
    />
    <Route
      exact
      path="/materials/:id/highlightImage"
      render={renderImageUpload({
        ...props,
        width: 1920,
        height: 720,
        attributeName: 'highlightImageUrl',
      })}
    />
    <Route
      exact
      path="/materials/:id/questionnaires"
      render={renderQuestionnaires({ ...props, aboutType: 'Material' })}
    />
  </div>
);
