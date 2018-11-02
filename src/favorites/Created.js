import { Component } from 'react'

export default class extends Component {
  componentDidMount() {
    this.props.snackbar.actions.setMessage('Favorito adicionado com sucesso')
  }

  render() {
    return null
  }
}
