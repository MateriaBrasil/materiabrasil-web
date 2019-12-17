import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';
import ReactGA from 'react-ga';

export default class extends Component {
  constructor(props) {
    super(props);
    const { created, setCurrentUser } = props;

    ReactGA.event({
      category: 'Cadastro Usuário',
      action: 'Submit',
    });

    setCurrentUser(created);
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const path = (state && state.referrer) || '/';

    return <Redirect to={path} />;
  }
}
