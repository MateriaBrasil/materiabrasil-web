import React from 'react'

import Colors from '../Colors'
import Explore from './Explore'
import WhatItIs from './WhatItIs'
import Introduction from './Introduction'
import Section from './Section'

export default props => (
  <div style={{ backgroundColor: Colors.grayNurse }}>
    <Section handleScroll={props.handleScroll(0)}>
      <Introduction />
    </Section>
    <Section handleScroll={props.handleScroll(1)}>
      <WhatItIs />
    </Section>
    <Section handleScroll={props.handleScroll(2)}>
      <Explore />
    </Section>
  </div>
)
