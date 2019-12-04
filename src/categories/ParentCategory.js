import React from 'react'
import includes from 'lodash/includes'
import some from 'lodash/some'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Typography from '@material-ui/core/Typography'


import './ParentCategory.css'
import { StyledExpansionPanelDetails, StyledPaper } from './styles'

import renderCategory, { isPresent } from './renderCategory'

export default props => {
  const { category, expandedCategories, onChangeExpanded } = props
  const { id, name, children } = category
  const deepNested = some(children, child => isPresent(child.children))
  const expanded = includes(expandedCategories, id)
  return category.parentId ? (
    <ExpansionPanel
      style={{ width: '100%', flex: 1 }}
      expanded={expanded}
      onChange={onChangeExpanded(id)}
    >
      <ExpansionPanelSummary
        style={{ border: '1px solid rgba(0,0,0,.1)' }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>{name}</Typography>
      </ExpansionPanelSummary>
      <StyledExpansionPanelDetails
        style={{
          display: deepNested ? 'block' : 'inline',
          padding: 0,
        }}
      >
        {children.map(renderCategory({ ...props, parent: category }))}
      </StyledExpansionPanelDetails>
    </ExpansionPanel>
  ) : (
    <div className="sidebar-custom-category" style={{ marginBottom: 20 }}>
      <Typography variant="h5" style={{ marginBottom: 20 }}>
        {category.name}
      </Typography>
      <StyledPaper>
        {category.children.map(renderCategory({ ...props, parent: category }))}
      </StyledPaper>
    </div>
  )
}
