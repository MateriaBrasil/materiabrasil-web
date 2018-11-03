import React from 'react'
import Grid from '@material-ui/core/Grid'

import Section from '../Section'
import Title from '../Title'

export default props => (
  <Section id="how_to_use">
    <Title color>Como usar</Title>
    <Grid item xs={12} style={{ textAlign: 'center' }}>
      <img
        src="https://images.template.net/wp-content/uploads/2016/03/17133511/Vector-Infographic-Report-Template-Premium-Download.jpg"
        alt=""
        style={{ maxWidth: '100%', padding: '3%' }}
      />
    </Grid>
  </Section>
)
