import React from 'react'
import Typography from '@material-ui/core/Typography'

import fullName from 'categories/fullName'

export default props => {
  const { list, selected } = props
  return selected.map(category => (
    <Typography key={category.id} variant="body1">
      {fullName(list, category, category.name)}
    </Typography>
  ))
}
