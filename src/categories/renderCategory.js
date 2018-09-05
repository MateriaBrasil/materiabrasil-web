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
import Destroy from './Destroy'

const isPresent = negate(isEmpty)

const renderCategory = props => category => {
  const { id, name, children } = category

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

  const materialCategory = find(
    materialCategories,
    ({ categoryId }) => categoryId === category.id,
  )

  if (materialCategory) {
    return (
      <Destroy
        {...props}
        key={category.id}
        category={category}
        materialCategory={materialCategory}
      />
    )
  }

  return <Create {...props} key={category.id} category={category} />
}

export default renderCategory
