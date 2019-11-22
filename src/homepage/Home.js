import React from 'react';
import Sections from './Sections';
import handleScroll from './handleScroll';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeStep: 0 };
    this.handleScroll = handleScroll.bind(this);
  }

  render() {
    return <Sections handleScroll={this.handleScroll} {...this.props} />;
  }
}
