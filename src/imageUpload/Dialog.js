import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import Button from '@material-ui/core/Button'

import Loading from '../Loading'
import closeDialog from './closeDialog'

export default withMobileDialog()(
  class extends Component {
    render() {
      const { fullScreen, disabled, onUpload, children, uploading } = this.props
      const { cancelDisabled } = this.props
      const handleCloseDialog = closeDialog(this.props)

      return (
        <Dialog
          fullScreen={fullScreen}
          open
          aria-labelledby="responsive-dialog-title"
          maxWidth="md"
          fullWidth
          onBackdropClick={handleCloseDialog}
          onEscapeKeyDown={handleCloseDialog}
        >
          <DialogTitle id="responsive-dialog-title">Alterar imagem</DialogTitle>
          <DialogContent>{children}</DialogContent>
          {uploading && <Loading />}
          <DialogActions>
            <Button
              disabled={cancelDisabled}
              onClick={handleCloseDialog}
              color="primary"
            >
              Cancelar
            </Button>
            <Button disabled={disabled} color="primary" onClick={onUpload}>
              Salvar
            </Button>
          </DialogActions>
        </Dialog>
      )
    }
  },
)
