import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';

export default class extends Component {
  componentDidMount() {
    this.props.snackbar.actions.setMessage('Material cadastrado com sucesso');
  }

  render() {
    let supplier = this.props.currentUser.suppliers[0];
    supplier.materials = [...supplier.materials, this.props.material];

    this.props.setCurrentUser({
      ...this.props.currentUser,
      suppliers: [supplier],
    });

    return <Redirect to={`/materials/${this.props.material.slug}`} />;
  }
}
