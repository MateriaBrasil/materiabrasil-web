import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import Router from './Router'

export default props => (
  <BrowserRouter>
    <div style={{ flexGrow: 1 }}>
      <CssBaseline />

      <Router {...props} />
    </div>
  </BrowserRouter>
)
