import React, { Component, Fragment } from 'react'
import Typography from '@material-ui/core/Typography'

export default class extends Component {
  render() {
    return (
      <Fragment>
        {this.props.currentUser &&
          this.props.currentUser.pendingSubscription && (
            <Typography color="inherit" variant="h5">
              Estamos processando sua assinatura! Volte mais tarde.
            </Typography>
          )}
        {this.props.currentUser &&
          this.props.currentUser.subscribed && (
            <Typography color="inherit" variant="h5">
              Parabéns! Você ativou sua assinatura com sucesso.
            </Typography>
          )}
        {!this.props.currentUser && (
          <Typography color="inherit">
            Você não está logado, se logue para continuar
          </Typography>
        )}
      </Fragment>
    )
  }
}
