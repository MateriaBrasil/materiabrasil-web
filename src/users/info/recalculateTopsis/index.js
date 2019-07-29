import DialogContentText from '@material-ui/core/DialogContentText'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import { New } from 'croods'
import React from 'react'

import ConfirmationButton from './ConfirmationButton'
import recalculateRenderCreate from './recalculateRenderCreate'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.openDialog = this.openDialog.bind(this)
    this.closeDialog = this.closeDialog.bind(this)
    this.state = {
      open: false,
    }
  }

  openDialog = () => {
    this.setState({ open: true })
  }

  closeDialog = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={this.openDialog}
          style={{ marginTop: '15px' }}
        >
          Recalcular
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.closeDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Tem certeza?</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Todos os drivers de todos fornecedores e materiais serão
              recalculados. Isso pode levar alguns minutos. Essa ação não pode
              ser desfeita.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.closeDialog} color="primary">
              Cancelar
            </Button>

            <New
              debugRequests
              name="recalculate"
              path="/recalculate_topsis"
              render={ConfirmationButton}
              renderCreated={recalculateRenderCreate({
                closeDialog: this.closeDialog,
                ...this.props,
              })}
            />
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}
