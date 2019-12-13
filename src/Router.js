import React from 'react';
import Redirect from 'react-router-dom/Redirect';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import renderAlbums from './albums/render';
import renderAuth from './auth/render';
import renderUsers from './users/render';
import renderSuppliers from './suppliers/render';
import renderTopics from './topics/render';
import renderAbout from './about/render';
import renderHomepage from './homepage/render';
import ScrollToTop from './ScrollToTop';

export default props => (
  <ScrollToTop>
    <Switch>
      <Route path="/auth" render={renderAuth(props)} />
      <Route path="/users" render={renderUsers(props)} />
      <Route path="/profile" render={renderUsers(props)} />
      <Route path="/search">
        <Redirect to="/" />
      </Route>
      <Route path="/materials">
        <Redirect to="/" />
      </Route>
      <Route path="/suppliers" render={renderSuppliers(props)} />
      <Route path="/forum" render={renderTopics(props)} />
      <Route path="/albums" render={renderAlbums(props)} />
      <Route path="/about" render={renderAbout(props)} />
      <Route path="/" render={renderHomepage(props)} />
    </Switch>
  </ScrollToTop>
);
