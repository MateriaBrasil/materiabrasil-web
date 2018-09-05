import React, { Component } from 'react'
import isFunction from 'lodash/isFunction'
import Button from '@material-ui/core/Button'
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
      const { title, callToAction, actionsChildren } = this.props
      const { fullScreen, match, history } = this.props
      const { handleSubmit, onSubmit, submitting } = this.props
      const { children = true, closeButton = true } = this.props
      const onDialogSubmit = event => {
        if (isFunction(handleSubmit)) {
          handleSubmit(onSubmit)(event)
        }
      }
      const { id } = match.params
      const handleCloseModal = closeModal({ history, id })
      const showActions = actionsChildren || closeButton || callToAction

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
            {showActions && (
              <DialogActions>
                {closeButton && <CloseDialog id={id} />}
                {callToAction && (
                  <Button color="primary" type="submit" disabled={submitting}>
                    {callToAction}
                  </Button>
                )}
                {actionsChildren}
              </DialogActions>
            )}
          </form>
        </Dialog>
      )
    }
  },
)
