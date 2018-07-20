import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import withMobileDialog from '@material-ui/core/withMobileDialog'

import closeModal from '../closeModal'
import Form from './Form'
import createWithParams from './createWithParams'

class New extends Component {
  render() {
    const { fullScreen, match, history, create, creating, error } = this.props
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
      >
        <DialogTitle id="responsive-dialog-title">Avaliar</DialogTitle>
        <Form
          id={id}
          onSubmit={createWithParams(create, id)}
          submitting={creating}
          createError={error}
        />
      </Dialog>
    )
  }
}

export default withMobileDialog()(New)
