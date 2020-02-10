import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Helmet } from 'react-helmet';

import Router from './Router';
import Footer from './Footer/render';

export default props => (
  // <BrowserRouter>
  <div style={{ flexGrow: 1 }}>
    <Helmet>
      <title>Materiamundi</title>
      <meta name="keywords" content="MateriaMundi" />
      <meta
        property="og:description"
        content="Ações para uma economia circular aplicada"
      />
      <meta property="og:title" content="Materiamundi" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={window.location.href} />
      <meta
        property="og:image"
        content="https://s3.amazonaws.com/materiamundi-us/static/materiamundi_logo_fb.png"
      />
      <meta name="author" content="MateriaMundi" />
    </Helmet>
    <CssBaseline />
    <Router {...props} />
    <Footer />
  </div>
  // </BrowserRouter>
);
