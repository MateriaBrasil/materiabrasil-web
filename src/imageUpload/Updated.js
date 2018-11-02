import React, { Component } from 'react'
import Redirect from 'react-router-dom/Redirect'

export default class extends Component {
  componentDidMount() {
    this.props.snackbar.actions.setMessage('Imagem enviada com sucesso')
  }

  render() {
    return <Redirect to={this.props.redirectUrl} />
  }
}
