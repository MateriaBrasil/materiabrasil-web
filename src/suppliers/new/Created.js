import React, { Component } from 'react'
import Redirect from 'react-router-dom/Redirect'

export default class extends Component {
  constructor(props) {
    super(props)
    const { currentUser, supplier, setCurrentUser, snackbar } = props

    setCurrentUser({
      ...currentUser,
      suppliers: [...currentUser.suppliers, supplier],
    })

    snackbar.actions.setMessage('Fornecedor cadastrado com sucesso')
  }

  render() {
    const { supplier } = this.props
    return <Redirect to={`/suppliers/${supplier.id}?reload=true`} />
  }
}
