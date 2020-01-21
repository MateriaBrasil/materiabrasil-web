import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';
import ReactGA from 'react-ga';

export default class extends Component {
  constructor(props) {
    super(props);
    const { currentUser, supplier, setCurrentUser, snackbar } = props;

    setCurrentUser({
      ...currentUser,
      suppliers: [...currentUser.suppliers, supplier],
    });

    ReactGA.event({
      category: 'Cadastro Fornecedor',
      action: 'Submit',
    });

    // Event snippet for Cadastro Fornecedor | Ads conversion page
    window.gtag('event', 'conversion', {
      send_to: 'AW-673796549/czMCCKqOuroBEMWjpcEC',
    });

    snackbar.actions.setMessage('Fornecedor cadastrado com sucesso');
  }

  render() {
    const { supplier } = this.props;
    return <Redirect to={`/suppliers/${supplier.slug}?reload=true`} />;
  }
}
