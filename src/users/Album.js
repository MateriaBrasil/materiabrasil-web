import React from 'react'
import Typography from '@material-ui/core/Typography'

import List from '../favorites/List'

export default ({ name, ...props }) => {
  return (
    <div>
      <Typography
        variant="headline"
        color="textSecondary"
        style={{ marginBottom: 16 }}
      >
        {name}
      </Typography>
      <List {...props} />
    </div>
  )
}
