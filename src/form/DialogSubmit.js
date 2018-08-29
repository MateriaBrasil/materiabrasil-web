import React from 'react'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'

export default ({ id, submitting, callToAction }) => (
  <DialogActions>
    <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
      <Button color="primary">Fechar</Button>
    </Link>
    <Button color="primary" type="submit" disabled={submitting}>
      {callToAction}
    </Button>
  </DialogActions>
)
