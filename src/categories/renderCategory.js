import React from 'react'
import isEmpty from 'lodash/isEmpty'
import some from 'lodash/some'
import find from 'lodash/find'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const renderCategory = props => category => {
  if (!isEmpty(category.children)) {
    const deepNested = some(category.children, 'category')

    return (
      <ExpansionPanel style={{ width: '100%', flex: 1 }} key={category.id}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{category.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          style={{ display: deepNested ? 'block' : 'flex' }}
        >
          {category.children.map(renderCategory(props))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  const { materialCategories } = props

  return (
    <FormControlLabel
      key={category.id}
      control={
        <Checkbox
          checked={find(
            materialCategories,
            ({ categoryId }) => categoryId === category.id,
          )}
          onChange={() => undefined}
          value={category.name}
        />
      }
      label={category.name}
    />
  )
}

export default renderCategory
