import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';
import ReactGA from 'react-ga';

export default class extends Component {
  componentDidMount() {
    ReactGA.event({
      category: 'Cadastro Material',
      action: 'Submit',
      label: this.props.material.name,
    });

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
