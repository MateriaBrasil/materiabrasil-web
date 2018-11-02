import React, { Component } from 'react'
import Redirect from 'react-router-dom/Redirect'

export default class extends Component {
  componentDidMount() {
    this.props.snackbar.actions.setMessage('Material cadastrado com sucesso')
  }

  render() {
    return <Redirect to={`/materials/${this.props.material.id}`} />
  }
}
