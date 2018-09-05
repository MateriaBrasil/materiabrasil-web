import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import FormGroup from '@material-ui/core/FormGroup'
import withMobileDialog from '@material-ui/core/withMobileDialog'

import CloseDialog from '../form/CloseDialog'

import categories from './mock'
import renderCategory from './renderCategory'
import closeModal from './closeModal'

export default withMobileDialog()(
  class extends Component {
    render() {
      const { fullScreen, match, history } = this.props
      const { id } = match.params
      const handleCloseModal = closeModal({ history, id })

      return (
        <Dialog
          fullScreen={fullScreen}
          open
          aria-labelledby="responsive-dialog-title"
          onBackdropClick={handleCloseModal}
          onEscapeKeyDown={handleCloseModal}
          fullWidth
        >
          <DialogTitle id="responsive-dialog-title">
            Adicionar Categorias
          </DialogTitle>
          <DialogContent>
            <FormGroup row>{categories.map(renderCategory)}</FormGroup>
          </DialogContent>
          <DialogActions>
            <CloseDialog id={id} />
          </DialogActions>
        </Dialog>
      )
    }
  },
)
