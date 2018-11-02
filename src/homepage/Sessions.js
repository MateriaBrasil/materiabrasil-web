import React, { Fragment } from 'react'

import Explore from './Explore'
import HowToUseIt from './HowToUseIt'
import Introduction from './Introduction'
import Section from './Section'

export default props => (
  <Fragment>
    <Section handleScroll={props.handleScroll(0)}>
      <Introduction />
    </Section>
    <Section handleScroll={props.handleScroll(1)}>
      <HowToUseIt />
    </Section>
    <Section handleScroll={props.handleScroll(2)}>
      <Explore />
    </Section>
  </Fragment>
)
