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
    render() {
      const { title, children, fullScreen, match, history } = this.props
      const { handleSubmit, onSubmit } = this.props
      const onDialogSubmit = event => {
        if (isFunction(handleSubmit)) {
          handleSubmit(onSubmit)(event)
        }
      }
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
          <form onSubmit={onDialogSubmit}>
            <DialogTitle id="responsive-dialog-title">{title}</DialogTitle>
            <DialogContent>{children}</DialogContent>
            <DialogActions
              {...this.props}
              handleCloseModal={handleCloseModal}
            />
          </form>
        </Dialog>
      )
    }
  },
)
