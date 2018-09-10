import React from 'react'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'

export default props => {
  const { cancelDisabled, handleCloseDialog, disabled, onUpload } = props

  return (
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
  )
}
