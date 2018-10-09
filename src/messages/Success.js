import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Dialog from 'materials/Dialog'

export default class Success extends Component {
  render() {
    return (
      <Dialog {...this.props} title="Mensagem enviada com sucesso">
        <Typography variant="body1">
          Sua mensagem foi enviada e o{' '}
          {this.props.toType === 'User' ? 'usuário' : 'fornecedor'} irá
          responder por email.
        </Typography>
      </Dialog>
    )
  }
}
