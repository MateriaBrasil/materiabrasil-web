import React from 'react'
import Typography from '@material-ui/core/Typography'

import List from '../../favorites/List'

export default ({ name, ...props }) => {
  return (
    <div style={{ marginTop: 20 }}>
      <Typography
        variant="h5"
        color="textSecondary"
        style={{ marginBottom: 16 }}
      >
        {name}
      </Typography>
      <List {...props} />
    </div>
  )
}
