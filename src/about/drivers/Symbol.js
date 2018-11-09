import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import Dialog from '@material-ui/core/Dialog'
import ActionButton from '@material-ui/core/Button'
import DialogActions from '@material-ui/core/DialogActions'

import Button from './Button'
import NameAndDescription from './NameAndDescription'

export default class extends Component {
  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({
      open: true,
    })
  }

  handleClose = value => {
    this.setState({ open: false })
  }

  render() {
    const { imageUrl, title, description } = this.props
    const btnStyle = { display: 'block', height: 200 }
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} style={{ padding: 20 }}>
        <Button style={btnStyle}>
          <img src={imageUrl} onClick={this.handleClickOpen} alt={title} />
        </Button>
        <NameAndDescription title={title}>{description}</NameAndDescription>
        <Dialog
          open={this.state.open}
          aria-labelledby="responsive-dialog-title"
          onClose={this.handleClose}
          fullScreen={window.innerWidth < 961}
          scroll={window.innerWidth < 600 ? 'body' : 'paper'}
        >
          {this.props.children}
          <DialogActions>
            <ActionButton onClick={this.handleClose} color="primary">
              Fechar
            </ActionButton>
          </DialogActions>
        </Dialog>
      </Grid>
    )
  }
}
