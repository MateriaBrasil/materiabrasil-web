import React, { useState } from 'react';

import Colors from '../Colors';

import Introduction from './Introduction';
import Section from './Section';
import Materials from '../explorer/render';
import Contact from '../contact/render';

export default props => {
  const [term, setTerm] = useState('');

  function handleSubmit(data) {
    setTerm(data.material);
  }

  return (
    <div style={{ backgroundColor: Colors.white }}>
      <Section handleScroll={props.handleScroll(0)}>
        <Introduction {...props} handleSubmit={handleSubmit} term={term} />
      </Section>
      <Section handleScroll={props.handleScroll(0)}>
        <Materials {...props} term={term} />
      </Section>

      <Section handleScroll={props.handleScroll(0)}>
        <Contact {...props} />
      </Section>
    </div>
  );
};
