import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import withMobileDialog from '@material-ui/core/withMobileDialog'

import Loading from '../Loading'
import closeDialog from './closeDialog'
import ImageDialogActions from './ImageDialogActions'

export default withMobileDialog()(
  class extends Component {
    render() {
      const { fullScreen, children, uploading } = this.props
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
          <ImageDialogActions
            {...this.props}
            handleCloseDialog={handleCloseDialog}
          />
        </Dialog>
      )
    }
  },
)
