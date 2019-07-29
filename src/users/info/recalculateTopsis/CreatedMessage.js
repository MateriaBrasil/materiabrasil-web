import React from 'react'

export default class extends React.Component {
  componentDidMount() {
    this.props.closeDialog()
    this.props.snackbar.actions.setMessage('Recalculo disparado com sucesso.')
  }

  render() {
    return null
  }
}
