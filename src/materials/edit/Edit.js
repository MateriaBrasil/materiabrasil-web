import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'

import Form from './Form'
import closeModal from '../closeModal'
import updateSelectedParams from './updateSelectedParams'

export default withMobileDialog()(
  class Edit extends Component {
    render() {
      const { fullScreen, match, history, updating, update, error } = this.props
      const { info } = this.props
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
            Atualizar material
          </DialogTitle>
          <Form
            id={id}
            initialValues={info}
            onSubmit={updateSelectedParams(update)}
            submitting={updating}
            updateError={error}
          />
        </Dialog>
      )
    }
  },
)
