import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'

import closeModal from './closeModal'
import Form from './Form'

export default withMobileDialog(
  class extends Component {
    render() {
      const { fullScreen, match, history, updating, update, error } = this.props
      const { params } = match
      const { id } = params
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
          <DialogTitle id="responsive-dialog-title">Avaliar</DialogTitle>
          <Form
            id={id}
            onSubmit={update}
            submitting={updating}
            updateError={error}
          />
        </Dialog>
      )
    }
  },
)
