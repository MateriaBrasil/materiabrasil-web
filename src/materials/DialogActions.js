import React from 'react'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'

export default props => {
  const { callToAction, actionsChildren, closeButton = true } = props
  const { onCloseModal, submitting } = props
  const showActions = actionsChildren || closeButton || callToAction

  return showActions ? (
    <DialogActions>
      {closeButton && (
        <Button color="primary" onClick={onCloseModal}>
          Fechar
        </Button>
      )}
      {callToAction && (
        <Button color="primary" type="submit" disabled={submitting}>
          {callToAction}
        </Button>
      )}
      {actionsChildren}
    </DialogActions>
  ) : null
}
