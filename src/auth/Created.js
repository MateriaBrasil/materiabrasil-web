import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';
import ReactGA from 'react-ga';

export default class extends Component {
  constructor(props) {
    super(props);
    const { created, setCurrentUser } = props;

    if (this.props.location.pathname === '/auth/sign-in') {
      ReactGA.event({
        category: 'Login',
        action: 'Submit',
      });
    } else if (this.props.location.pathname === '/auth/sign-up') {
      ReactGA.event({
        category: 'Cadastro Usuário',
        action: 'Submit',
      });

      // Event snippet for Cadastro Usuário | Ads conversion page
      window.gtag('event', 'conversion', {
        send_to: 'AW-673796549/uz0DCLOkyboBEMWjpcEC',
      });
    }

    setCurrentUser(created);
  }

  render() {
    const { location } = this.props;
    const { state } = location;
    const path = (state && state.referrer) || '/';

    return <Redirect to={path} />;
  }
}
