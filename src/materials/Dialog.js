import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import withMobileDialog from '@material-ui/core/withMobileDialog'

import closeModal from './closeModal'
import CloseDialog from 'form/CloseDialog'

export default withMobileDialog()(
  class extends Component {
    render() {
      const { title, children, closeButton = true, actionsChildren } = this.props
      const { fullScreen, match, history } = this.props
      const { id } = match.params
      const handleCloseModal = closeModal({ history, id })
      const showActions = actionsChildren || closeButton

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
            {title}
          </DialogTitle>
          <DialogContent>
            {children}
          </DialogContent>
          {showActions && (
            <DialogActions>
              {closeButton && <CloseDialog id={id} />}
              {actionsChildren}
            </DialogActions>
          )}
        </Dialog>
      )
    }
  },
)
