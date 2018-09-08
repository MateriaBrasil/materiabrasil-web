import React from 'react'
import some from 'lodash/some'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

import renderCategory, { isPresent } from './renderCategory'

export default props => {
  const { category, onSelect } = props
  const { id, name, children } = category
  const deepNested = some(children, child => isPresent(child.children))

  return (
    <ExpansionPanel style={{ width: '100%', flex: 1 }} key={id}>
      <ExpansionPanelSummary
        style={{ border: '1px solid rgba(0,0,0,.1)' }}
        expandIcon={<ExpandMoreIcon />}
      >
        <Typography>{name}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails
        style={{
          display: deepNested ? 'block' : 'flex',
          flexDirection: 'column',
          padding: 0,
        }}
      >
        {children.map(renderCategory({ ...props, parent: category }, onSelect))}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )
}
