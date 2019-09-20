import React, { Component } from 'react'
import isFunction from 'lodash/isFunction'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import withMobileDialog from '@material-ui/core/withMobileDialog'

import DialogActions from './DialogActions'
import closeModal from './closeModal'

export default withMobileDialog()(
  class extends Component {
    constructor(props) {
      super(props)
      this.onDialogSubmit = this.onDialogSubmit.bind(this)
    }

    onDialogSubmit(event) {
      const { handleSubmit, onSubmit } = this.props
      if (isFunction(handleSubmit)) {
        return handleSubmit(onSubmit)(event)
      }
    }

    render() {
      const { title, children, fullScreen, match, history } = this.props
      const { onCloseModel } = this.props
      const { closeButtonName } = this.props || false
      const { id } = match.params
      const handleCloseModal = onCloseModel || closeModal({ history, id })

      return (
        <Dialog
          fullScreen={fullScreen}
          open
          aria-labelledby="responsive-dialog-title"
          onBackdropClick={handleCloseModal}
          onEscapeKeyDown={handleCloseModal}
          fullWidth
        >
          <form onSubmit={this.onDialogSubmit}>
            <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions {...this.props} onCloseModal={handleCloseModal} />
          </form>
        </Dialog>
      )
    }
  },
)
