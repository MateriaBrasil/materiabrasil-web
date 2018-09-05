import React from 'react'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import some from 'lodash/some'

const renderCategory = category => {
  if (category.categories) {
    const deepNested = some(category.categories, 'categories')

    return (
      <ExpansionPanel style={{ width: '100%', flex: 1 }} key={category.id}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{category.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          style={{ display: deepNested ? 'block' : 'flex' }}
        >
          {category.categories.map(renderCategory)}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  return (
    <FormControlLabel
      key={category.id}
      control={
        <Checkbox
          checked={false}
          onChange={() => undefined}
          value={category.name}
        />
      }
      label={category.name}
    />
  )
}

export default renderCategory
