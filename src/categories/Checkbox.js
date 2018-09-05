import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

export default ({ category, materialCategory, action }) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={!!materialCategory}
        onChange={action}
        value={category.name}
      />
    }
    label={category.name}
  />
)
