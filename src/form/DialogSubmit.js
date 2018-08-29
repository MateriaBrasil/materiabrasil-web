import React from 'react'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'

import CloseDialog from './CloseDialog'

export default ({ id, submitting, callToAction }) => (
  <DialogActions>
    <CloseDialog id={id} />
    <Button color="primary" type="submit" disabled={submitting}>
      {callToAction}
    </Button>
  </DialogActions>
)
