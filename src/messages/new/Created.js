import React, { Component } from 'react';
import Redirect from 'react-router-dom/Redirect';

export default class extends Component {
  render() {
    return (
      <Redirect
        to={`/${this.props.toType.toLowerCase()}s/${
          this.props.match.params.id
        }/messages/success`}
      />
    );
  }
}
