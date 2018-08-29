import React, { Component } from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import withMobileDialog from '@material-ui/core/withMobileDialog'

import CloseDialog from '../../form/CloseDialog'
import Reviews from './Reviews'
import closeModal from '../closeModal'

class List extends Component {
  render() {
    const { fullScreen, id, list } = this.props
    const handleCloseModal = closeModal(this.props)

    return (
      <Dialog
        fullScreen={fullScreen}
        open
        aria-labelledby="responsive-dialog-title"
        maxWidth="md"
        fullWidth
        onBackdropClick={handleCloseModal}
        onEscapeKeyDown={handleCloseModal}
      >
        <DialogTitle id="responsive-dialog-title">Avaliações</DialogTitle>
        <DialogContent>
          <Reviews list={list} />
        </DialogContent>
        <DialogActions>
          <CloseDialog id={id} />
        </DialogActions>
      </Dialog>
    )
  }
}

export default withMobileDialog()(List)
