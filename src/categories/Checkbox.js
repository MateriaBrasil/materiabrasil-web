import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio'

import { StyledFormControlLabel } from './styles'

export default ({ rootCategory = {}, category, checked, action }) => {
  const { multipleChoice = true } = rootCategory
  const Control = multipleChoice ? Checkbox : Radio

  return (
    <StyledFormControlLabel
      control={
        <Control
          name={`category-root-${rootCategory.id}`}
          checked={checked}
          onChange={action}
          value={category.name}
        />
      }
      label={category.name}
    />
  )
}
