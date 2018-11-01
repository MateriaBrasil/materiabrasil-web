import React from 'react'

import './Content.css'

export default ({ children }) => (
  <div className="content" style={{ paddingTop: '140px' }}>
    {children}
  </div>
)
