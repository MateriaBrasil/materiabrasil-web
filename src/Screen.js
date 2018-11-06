import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import { Helmet } from 'react-helmet'

import Router from './Router'
import Footer from './Footer'

export default props => (
  <BrowserRouter>
    <div style={{ flexGrow: 1 }}>
      <Helmet>
        <title>Materiamundi</title>
        <meta
          name="description"
          content="Ações para uma economia circular aplicada"
        />
        <meta name="keywords" content="MateriaMundi" />
        <meta name="og:type" content="website" />
        <meta name="og:url" content={window.location.href} />
        <meta
          name="og:image"
          content="https://s3.amazonaws.com/materiamundi-us/static/materiamundi_logo_fb.png"
        />
        <meta name="author" content="MateriaMundi" />
      </Helmet>
      <CssBaseline />
      <Router {...props} />
      <Footer />
    </div>
  </BrowserRouter>
)
