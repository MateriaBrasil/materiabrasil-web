import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import withMobileDialog from '@material-ui/core/withMobileDialog'
import Link from 'react-router-dom/Link'
import Button from '@material-ui/core/Button'

import Reviews from './Reviews'

class List extends Component {
  render() {
    const { fullScreen, id, list } = this.props

    return (
      <Dialog
        fullScreen={fullScreen}
        open
        aria-labelledby="responsive-dialog-title"
        maxWidth="md"
        fullWidth
      >
        <DialogTitle id="responsive-dialog-title">Avaliações</DialogTitle>
        <DialogContent>
          <Reviews list={list} />
        </DialogContent>
        <DialogActions>
          <Link to={`/${id}`} style={{ textDecoration: 'none' }}>
            <Button color="primary">Fechar</Button>
          </Link>
        </DialogActions>
      </Dialog>
    )
  }
}

export default withMobileDialog()(List)
