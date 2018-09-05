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

import Create from './Create'
import Checkbox from './Checkbox'
import Destroy from './Destroy'

const isPresent = negate(isEmpty)

const renderCategory = (props, onSelect) => category => {
  const { id, name, children } = category

  if (isPresent(children)) {
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
          {children.map(
            renderCategory({ ...props, parent: category }, onSelect),
          )}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

  const { materialCategories, parent } = props

  const materialCategory = find(
    materialCategories,
    ({ categoryId }) => categoryId === category.id,
  )

  const childProps = {
    ...props,
    key: category.id,
    parent,
    category,
    materialCategory,
  }

  if (onSelect) {
    return <Checkbox {...childProps} action={onSelect(category)} />
  }

  const Component = materialCategory ? Destroy : Create
  return <Component {...childProps} />
}

export default renderCategory
