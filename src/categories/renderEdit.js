import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

import some from 'lodash/some'

// import withMobileDialog from '@material-ui/core/withMobileDialog'
// import { Edit } from 'croods'

import categories from './mock'

// import render from './edit/render'
// import reload from './reload'

const renderCategory = category => {
  if (category.categories) {
    const deepNested = some(category.categories, 'categories')
    return (
      <ExpansionPanel style={{ width: '100%', flex: 1 }}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{category.name}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{ display: deepNested ? 'block' : 'flex' }}>
          {category.categories.map(renderCategory)}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
  return (
    <FormControlLabel
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

export default props => routeProps => {

  return (
    <Dialog
      fullScreen={false}
      open
      aria-labelledby="responsive-dialog-title"
      onBackdropClick={() => undefined}
      onEscapeKeyDown={() => undefined}
      fullWidth
    >
      <DialogTitle id="responsive-dialog-title">
        Adicionar Categorias
      </DialogTitle>
      <DialogContent>
        <FormGroup row>{categories.map(renderCategory)}</FormGroup>
      </DialogContent>
    </Dialog>
  )
}
