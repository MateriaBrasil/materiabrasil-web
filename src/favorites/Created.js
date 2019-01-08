import { Component } from 'react'

export default class extends Component {
  componentDidMount() {
    this.props.snackbar.actions.setMessage('Material adicionado com sucesso')
  }

  render() {
    return null
  }
}
