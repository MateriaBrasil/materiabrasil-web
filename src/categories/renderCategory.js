import React from 'react'
import isEmpty from 'lodash/isEmpty'
import negate from 'lodash/negate'
import some from 'lodash/some'
import find from 'lodash/find'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const isPresent = negate(isEmpty)

const renderCategory = props => ({ id, name, children }) => {
  if (isPresent(children)) {
    const deepNested = some(children, child => isPresent(child.children))

    return (
      <ExpansionPanel style={{ width: '100%', flex: 1 }} key={id}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails
          style={{ display: deepNested ? 'block' : 'flex' }}
        >
          {children.map(renderCategory(props))}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  const { materialCategories } = props

  return (
    <FormControlLabel
      key={id}
      control={
        <Checkbox
          checked={find(
            materialCategories,
            ({ categoryId }) => categoryId === id,
          )}
          onChange={() => undefined}
          value={name}
        />
      }
      label={name}
    />
  )
}

export default renderCategory
