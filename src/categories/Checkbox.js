import React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio'

export default ({ rootCategory, category, materialCategory, action }) => {
  const { multipleChoice } = rootCategory
  const Control = multipleChoice ? Checkbox : Radio

  return (
    <FormControlLabel
      style={{ margin: 0 }}
      control={
        <Control
          name={`category-root-${rootCategory.id}`}
          checked={!!materialCategory}
          onChange={action}
          value={category.name}
        />
      }
      label={category.name}
    />
  )
}