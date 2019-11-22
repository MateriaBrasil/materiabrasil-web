import React from 'react';

import Colors from '../Colors';

import Introduction from './Introduction';
import Section from './Section';
import Materials from '../explorer/render';

export default props => (
  <div style={{ backgroundColor: Colors.white }}>
    <Section handleScroll={props.handleScroll(0)}>
      <Introduction />
    </Section>
    <Section handleScroll={props.handleScroll(0)}>
      <Materials {...props} />
    </Section>
  </div>
);
