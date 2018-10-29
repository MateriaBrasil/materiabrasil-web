import React, { Component } from 'react'
import Redirect from 'react-router-dom/Redirect'

export default class extends Component {
  constructor(props) {
    super(props)

    const { currentUser, supplier, setCurrentUser } = props
    const newCurrentUser = {
      ...currentUser,
      suppliers: [...currentUser.suppliers, supplier],
    }

    setCurrentUser(newCurrentUser)
  }

  render() {
    const { supplier } = this.props
    return <Redirect to={`/suppliers/${supplier.id}?reload=true`} />
  }
}
