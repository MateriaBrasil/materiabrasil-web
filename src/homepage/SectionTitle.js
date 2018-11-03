import React from 'react'
import Typography from '@material-ui/core/Typography'

import Colors from '../Colors'

export default ({ image, children }) => (
  <div style={{ position: 'relative' }}>
    <img src={image} alt="polygon" style={{ width: 250, height: 250 }} />
    <Typography
      variant="h4"
      style={{
        position: 'absolute',
        bottom: 10,
        left: 50,
        color: Colors.grayNurse,
        fontWeight: 'bold',
      }}
    >
      {children}
    </Typography>
  </div>
)
